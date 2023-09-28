import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const transport = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 587,
      auth: {
        user: process.env.ZOHOMAIL_USER,
        pass: process.env.ZOHOMAIL_PASS,
      },
    });

    const mailData = {
      from: process.env.ZOHOMAIL_USER,
      to: process.env.ZOHOMAIL_USER,
      subject: `Message from ${req.body.email}`,
      text: req.body.message,
    };

    await transport.sendMail(mailData);

    res.status(200).send("Email sent successfully");
  } else {
    res.status(405).end();
  }
};

export default sendEmail;