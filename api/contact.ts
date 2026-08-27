import { validateContactPayload, checkRateLimit } from '../server/validation';
import { sendContactEmail } from '../server/emailService';

export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
    return;
  }

  try {
    const clientIp =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.headers['x-real-ip'] ||
      req.socket?.remoteAddress ||
      'unknown';

    if (!checkRateLimit(clientIp)) {
      res.status(429).json({
        success: false,
        error: 'Too many requests. Please wait a few minutes before submitting again.',
      });
      return;
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const validation = validateContactPayload(body);
    if (!validation.isValid || !validation.sanitizedData) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validation.errors,
      });
      return;
    }

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
    console.error('[API /api/contact] Serverless error:', err);
    res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred while processing your request.',
    });
  }
}
