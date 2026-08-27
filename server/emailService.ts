import nodemailer from 'nodemailer';
import { ValidatedContactData } from './validation';

export interface EmailDeliveryResult {
  success: boolean;
  provider: string;
  messageId?: string;
  simulated?: boolean;
  error?: string;
}

const DESTINATION_EMAIL = process.env.CONTACT_EMAIL || process.env.DESTINATION_EMAIL || 'mathesh.aks@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

/**
 * Formats the plain-text email body exactly as specified in the requirements
 */
export function formatEmailBody(data: ValidatedContactData, timestampIso: string): { subject: string; text: string; html: string } {
  const formattedDate = new Date(timestampIso).toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Asia/Kolkata',
  });

  const subject = `New Portfolio Enquiry — ${data.projectScope}`;

  const text = `NEW PROJECT ENQUIRY

Name:
${data.name}

Email:
${data.email}

Project Scope:
${data.projectScope}

Project Details:
${data.projectDetails}

Submitted:
${formattedDate} (${timestampIso})

Portfolio:
Mathesh A K S`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080808; color: #e5e5e5; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #121212; border: 1px solid #222222; padding: 32px; border-radius: 4px; }
    .header { border-bottom: 1px solid #222222; padding-bottom: 20px; margin-bottom: 24px; }
    .badge { font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #c4a47c; margin-bottom: 8px; }
    .title { font-size: 22px; font-weight: 700; color: #ffffff; margin: 0; }
    .field-group { margin-bottom: 20px; }
    .label { font-family: monospace; font-size: 11px; text-transform: uppercase; color: #888888; letter-spacing: 0.1em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #e5e5e5; line-height: 1.6; }
    .highlight { color: #c4a47c; font-weight: 600; }
    .message-box { background-color: #080808; border: 1px solid #222222; padding: 16px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #f0f0f0; margin-top: 6px; }
    .footer { border-top: 1px solid #222222; padding-top: 20px; margin-top: 28px; font-family: monospace; font-size: 11px; color: #666666; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">MATHESH A K S // PORTFOLIO INQUIRY</div>
      <h1 class="title">NEW PROJECT ENQUIRY</h1>
    </div>

    <div class="field-group">
      <div class="label">CLIENT / INQUIRER NAME</div>
      <div class="value">${escapeHtml(data.name)}</div>
    </div>

    <div class="field-group">
      <div class="label">EMAIL ADDRESS (REPLY-TO)</div>
      <div class="value"><a href="mailto:${escapeHtml(data.email)}" style="color: #c4a47c; text-decoration: none;">${escapeHtml(data.email)}</a></div>
    </div>

    <div class="field-group">
      <div class="label">PROJECT SCOPE / ENGAGEMENT</div>
      <div class="value highlight">${escapeHtml(data.projectScope)}</div>
    </div>

    <div class="field-group">
      <div class="label">PROJECT DETAILS &amp; TIMELINE</div>
      <div class="message-box">${escapeHtml(data.projectDetails)}</div>
    </div>

    <div class="field-group">
      <div class="label">SUBMITTED TIMESTAMP</div>
      <div class="value" style="font-family: monospace; font-size: 12px; color: #888888;">${escapeHtml(formattedDate)}</div>
    </div>

    <div class="footer">
      Portfolio: Mathesh A K S · AI Creative Designer · Prompt Engineer
    </div>
  </div>
</body>
</html>`;

  return { subject, text, html };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Main dispatch function for sending transactional emails
 */
export async function sendContactEmail(data: ValidatedContactData): Promise<EmailDeliveryResult> {
  const timestamp = new Date().toISOString();
  const { subject, text, html } = formatEmailBody(data, timestamp);

  // 1. Resend API
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [DESTINATION_EMAIL],
          reply_to: data.email,
          subject: subject,
          text: text,
          html: html,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || `Resend HTTP error ${res.status}`);
      }

      console.log(`[EmailService:Resend] Email delivered successfully. ID: ${json.id}`);
      return { success: true, provider: 'resend', messageId: json.id };
    } catch (err: any) {
      console.error('[EmailService:Resend] Delivery failure:', err.message);
      return { success: false, provider: 'resend', error: err.message };
    }
  }

  // 2. SendGrid API
  if (process.env.SENDGRID_API_KEY) {
    try {
      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: DESTINATION_EMAIL }],
              subject: subject,
            },
          ],
          from: { email: process.env.SENDGRID_FROM_EMAIL || DESTINATION_EMAIL, name: 'Portfolio Contact' },
          reply_to: { email: data.email, name: data.name },
          content: [
            { type: 'text/plain', value: text },
            { type: 'text/html', value: html },
          ],
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`SendGrid API returned status ${res.status}: ${errorText}`);
      }

      console.log('[EmailService:SendGrid] Email delivered successfully.');
      return { success: true, provider: 'sendgrid' };
    } catch (err: any) {
      console.error('[EmailService:SendGrid] Delivery failure:', err.message);
      return { success: false, provider: 'sendgrid', error: err.message };
    }
  }

  // 3. SMTP Transport (Nodemailer)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: `"${data.name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: DESTINATION_EMAIL,
        replyTo: data.email,
        subject: subject,
        text: text,
        html: html,
      });

      console.log(`[EmailService:SMTP] Email sent via SMTP. Message ID: ${info.messageId}`);
      return { success: true, provider: 'smtp', messageId: info.messageId };
    } catch (err: any) {
      console.error('[EmailService:SMTP] Delivery failure:', err.message);
      return { success: false, provider: 'smtp', error: err.message };
    }
  }

  // 4. Generic Webhook / Email Service API
  if (process.env.EMAIL_SERVICE_URL) {
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (process.env.EMAIL_SERVICE_API_KEY) {
        headers['Authorization'] = `Bearer ${process.env.EMAIL_SERVICE_API_KEY}`;
      }

      const res = await fetch(process.env.EMAIL_SERVICE_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          to: DESTINATION_EMAIL,
          replyTo: data.email,
          subject,
          text,
          html,
          data,
        }),
      });

      if (!res.ok) {
        throw new Error(`Email Service URL returned status ${res.status}`);
      }

      return { success: true, provider: 'webhook' };
    } catch (err: any) {
      console.error('[EmailService:Webhook] Delivery failure:', err.message);
      return { success: false, provider: 'webhook', error: err.message };
    }
  }

  // 5. Development / Preview simulation mode when no external keys are configured
  console.log('\n===============================================================');
  console.log('⚡ [EMAIL DISPATCH - PREVIEW/SIMULATION MODE]');
  console.log('---------------------------------------------------------------');
  console.log(`To: ${DESTINATION_EMAIL}`);
  console.log(`Reply-To: ${data.email} (${data.name})`);
  console.log(`Subject: ${subject}`);
  console.log('---------------------------------------------------------------');
  console.log(text);
  console.log('===============================================================\n');

  return {
    success: true,
    provider: 'local-simulation',
    simulated: true,
    messageId: `sim_${Date.now()}`,
  };
}
