import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jesanextgen@gmail.com",
        pass: "ageg kbcj bpuo pzuc",
      },
    });

    await transporter.sendMail({
      from: "jesanextgen@gmail.com",
      to: "ms.sellwidely@gmail.com",
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Mail failed" },
      { status: 500 }
    );
  }
}

