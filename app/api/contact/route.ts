import { NextResponse } from 'next/server';
import { sendTelegramMessage } from '../../lib/telegram';
import { checkRateLimit } from '../../lib/rateLimit';

// Helper to get client IP
function getClientIP(req: Request): string {
  // Vercel provides these headers
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  
  // x-forwarded-for can contain multiple IPs (client, proxy1, proxy2)
  // Take the first one (original client)
  const ip = forwarded?.split(',')[0]?.trim() || realIP || 'unknown';
  return ip;
}

// Input validation
function validateInput(
  email: string, 
  message: string, 
  honeypot?: string
): { valid: boolean; error?: string } {
  // Honeypot check
  if (honeypot && honeypot.trim() !== '') {
    return { valid: false, error: 'Spam detected' };
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }
  
  // Message validation
  if (!message || message.trim().length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters' };
  }
  
  if (message.length > 2000) {
    return { valid: false, error: 'Message is too long (max 2000 characters)' };
  }
  
  return { valid: true };
}

export async function POST(req: Request) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(req);
    
    // Check rate limit BEFORE processing
    const rateLimit = checkRateLimit(clientIP);
    
    if (!rateLimit.allowed) {
      const resetTime = rateLimit.resetTime 
        ? new Date(rateLimit.resetTime).toISOString() 
        : '';
      
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          resetTime: resetTime
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateLimit.resetTime?.toString() || '',
            'Retry-After': '3600', // Retry after 1 hour (in seconds)
          }
        }
      );
    }
    
    const { email, message, honeypot } = await req.json();
    console.log('Attempting to send message from:', email, 'IP:', clientIP);

    // Input validation
    const validation = validateInput(email, message, honeypot);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    // Sanitize message (basic HTML sanitization)
    const sanitizedMessage = message
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .trim();

    await sendTelegramMessage(email, sanitizedMessage);
    console.log('Message sent successfully to Telegram');
    
    return NextResponse.json({ 
      success: true,
      remaining: rateLimit.remaining
    }, {
      headers: {
        'X-RateLimit-Limit': '5',
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        'X-RateLimit-Reset': rateLimit.resetTime?.toString() || '',
      }
    });
    
  } catch (error) {
    console.error('Failed to send message:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

