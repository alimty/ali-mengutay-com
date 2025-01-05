import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendEmail(from: string, message: string) {
  console.log('Checking env:', !!process.env.GMAIL_USER, !!process.env.GMAIL_APP_PASSWORD);
  await transporter.sendMail({
    from: `${from} -- ali.mengutay.com <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: from,
    subject: 'Message from ali.mengutay.com',
    text: `${message}`,
    html: `
      <div style="font-family: sans-serif; color: #333;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    `,
  });
}