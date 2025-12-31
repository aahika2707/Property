import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jesanextgen@gmail.com",
        pass: "ageg kbcj bpuo pzuc", // Gmail App Password Only!
      },
    });

    const mailOptions = {
      from: "jesanextgen@gmail.com",
      to: "enquire@sellwidely.in",
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully 🤝" });
  } catch (error) {
    console.error("Mail Error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
