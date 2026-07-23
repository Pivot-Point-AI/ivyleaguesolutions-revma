import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_FROM_EMAIL}>`,
      replyTo: email,
      to: process.env.CONTACT_TO_EMAIL,
      subject: subject ? `[Contact Form] ${subject}` : "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "-"}\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
