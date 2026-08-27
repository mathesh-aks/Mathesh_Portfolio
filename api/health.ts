export default async function handler(req: any, res: any) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
    return;
  }

  res.status(200).json({
    status: 'ok',
    portfolio: 'Mathesh A K S',
    emailConfigured: Boolean(
      process.env.RESEND_API_KEY ||
      process.env.SENDGRID_API_KEY ||
      process.env.SMTP_HOST ||
      process.env.EMAIL_SERVICE_URL
    ),
    timestamp: new Date().toISOString(),
  });
}
