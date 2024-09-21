import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

// server function for handling email sending
export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  // set up the mail options
  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
    setting service as 'gmail' is same as providing these settings:
    host: "smtp.gmail.com",
    port: 465,
    secure: true
    different email provider? https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // send an email from my address to my own address
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email - uncomment line to send a copy to the sender
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  // make synchronous function sendMail asynchronous
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      // send email
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
