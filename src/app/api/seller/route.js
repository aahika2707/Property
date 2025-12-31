import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
    FirstName,
    LastName,
    Mobile,
    Location,
    Preference,
    Property_type,
    Message,
    } = await req.json();

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
      subject: "Seller Enquire Form Submission",
      html: `
        <h2>New Seller Enquiry</h2>
        <p><b>Name:</b> ${FirstName} ${LastName || ""}</p>
        <p><b>Phone:</b> ${Mobile}</p>
        <p><b>Location:</b> ${Location}</p>
        <p><b>Budget Preference:</b> ${Preference}</p>
        <p><b>Property Type:</b> ${Property_type}</p>
        <p><b>Description:</b> ${Message}</p>
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

