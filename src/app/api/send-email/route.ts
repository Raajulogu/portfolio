// src/app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { config } from '../../../../config'; // Adjust this path if needed

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.EMAIL_USER,
        pass: config.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: config.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json({ success: false, error: 'Email failed to send' }, { status: 500 });
  }
}
