import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { validateContactPayload, checkRateLimit } from './server/validation';
import { sendContactEmail } from './server/emailService';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for parsing JSON with request size limits
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// 1. Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    portfolio: 'Mathesh A K S',
    emailConfigured: Boolean(process.env.RESEND_API_KEY || process.env.SENDGRID_API_KEY || process.env.SMTP_HOST || process.env.EMAIL_SERVICE_URL),
    timestamp: new Date().toISOString(),
  });
});

// 2. Contact inquiry endpoint
app.post('/api/contact', async (req: Request, res: Response): Promise<void> => {
  try {
    const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';

    // 1. Rate limiting check
    if (!checkRateLimit(clientIp)) {
      res.status(429).json({
        success: false,
        error: 'Too many requests. Please wait a few minutes before submitting again.',
      });
      return;
    }

    // 2. Server-side validation and sanitization
    const validation = validateContactPayload(req.body);
    if (!validation.isValid || !validation.sanitizedData) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validation.errors,
      });
      return;
    }

    // 3. Send email to Mathesh
    const delivery = await sendContactEmail(validation.sanitizedData);

    if (!delivery.success) {
      res.status(502).json({
        success: false,
        error: delivery.error || 'Failed to dispatch email to recipient.',
        provider: delivery.provider,
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Inquiry received. Mathesh will review your project details shortly.',
      provider: delivery.provider,
      simulated: delivery.simulated || false,
    });
  } catch (err: any) {
    console.error('[API /api/contact] Internal server error:', err);
    res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred while processing your request.',
    });
  }
});

// Vite & Static Asset Handling
async function setupViteOrStatic() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Mathesh A K S Portfolio running on http://localhost:${PORT}`);
  });
}

setupViteOrStatic().catch((err) => {
  console.error('[Server] Failed to bootstrap server:', err);
  process.exit(1);
});
