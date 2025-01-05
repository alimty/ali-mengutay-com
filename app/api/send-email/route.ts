import { NextResponse } from 'next/server';
import { sendEmail } from '../../lib/mail';

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();
    console.log('Attempting to send email from:', email);

    if (!email || !message) {
      console.log('Missing email or message');
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    await sendEmail(email, message);
    console.log('Email sent successfully');
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 