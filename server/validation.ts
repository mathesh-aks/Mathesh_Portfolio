// Server-side validation and sanitization for contact inquiries
export interface ValidatedContactData {
  name: string;
  email: string;
  projectScope: string;
  projectDetails: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ValidatedContactData;
}

const ALLOWED_PROJECT_SCOPES = [
  'AI Campaign',
  'Visual Storytelling',
  'AI Image Generation',
  'AI Video',
  'Branding / Creative Design',
  'Social Media Creative',
  'Prompt Engineering',
  'Creative Consultation',
  'Other',
];

// Sanitize string to prevent XSS, HTML injection, and header injection
export function sanitizeString(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, '') // Remove control characters
    .trim();
}

// Basic email format validation
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 100) return false;
  // RFC 5322 compliant regex simplified for real-world emails
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

export function validateContactPayload(body: any): ValidationResult {
  const errors: Record<string, string> = {};

  if (!body || typeof body !== 'object') {
    return { isValid: false, errors: { form: 'Invalid request payload' } };
  }

  // Honeypot check (field named 'botcheck', 'website', or 'honeypot')
  const botField = body.botcheck || body.website || body.honeypot;
  if (botField && String(botField).trim().length > 0) {
    // Honeypot filled by automated bot
    return {
      isValid: false,
      errors: { bot: 'Spam detected' },
    };
  }

  // 1. Name validation
  const rawName = sanitizeString(body.name);
  if (!rawName) {
    errors.name = 'Your name is required';
  } else if (rawName.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (rawName.length > 100) {
    errors.name = 'Name must not exceed 100 characters';
  }

  // 2. Email validation
  const rawEmail = sanitizeString(body.email);
  if (!rawEmail) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(rawEmail)) {
    errors.email = 'Please enter a valid email address (e.g. anand@brand.com)';
  }

  // 3. Project Scope validation
  const rawScope = sanitizeString(body.projectScope);
  let resolvedScope = rawScope;
  if (!rawScope || !ALLOWED_PROJECT_SCOPES.includes(rawScope)) {
    // If client sent a variant or invalid value, check if partial match or default to 'AI Campaign'
    const matched = ALLOWED_PROJECT_SCOPES.find((s) => s.toLowerCase() === rawScope.toLowerCase());
    if (matched) {
      resolvedScope = matched;
    } else {
      errors.projectScope = 'Please select a valid project scope';
    }
  }

  // 4. Project Details validation
  const rawDetails = sanitizeString(body.projectDetails);
  if (!rawDetails) {
    errors.projectDetails = 'Project details are required';
  } else if (rawDetails.length < 10) {
    errors.projectDetails = 'Please provide a few more details (minimum 10 characters)';
  } else if (rawDetails.length > 5000) {
    errors.projectDetails = 'Project details must not exceed 5000 characters';
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: {},
    sanitizedData: {
      name: rawName,
      email: rawEmail,
      projectScope: resolvedScope,
      projectDetails: rawDetails,
    },
  };
}

// In-memory rate limiting map: IP -> list of submission timestamps
const ipRateMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 6; // max 6 submissions per 10 minutes per IP

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRateMap.get(ip) || [];

  // Filter timestamps within window
  const activeTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  activeTimestamps.push(now);
  ipRateMap.set(ip, activeTimestamps);

  // Periodic cleanup of stale IPs
  if (ipRateMap.size > 1000) {
    for (const [key, times] of ipRateMap.entries()) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        ipRateMap.delete(key);
      }
    }
  }

  return true;
}
