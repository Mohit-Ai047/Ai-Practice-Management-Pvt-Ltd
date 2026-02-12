import { sql } from "@vercel/postgres";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, requestedService, message } = body || {};

    if (!name || !email || !requestedService) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Ensure table exists
    await sql`
      CREATE TABLE IF NOT EXISTS service_enquiries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        requested_service TEXT NOT NULL,
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await sql`
      INSERT INTO service_enquiries (name, email, phone, requested_service, message)
      VALUES (${name}, ${email}, ${phone || null}, ${requestedService}, ${message || null});
    `;

    // Confirmation email to user
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: process.env.MAIL_FROM || "mohit@aipracticemanagement.com",
        to: email,
        subject: "We received your service enquiry",
        text: `Hi ${name || ""},\n\nThank you for your interest in our "${requestedService}" service. We have received your enquiry and will contact you shortly.\n\nBest regards,\nThe Revenue Haven`,
      });

      // Admin notification
      if (ADMIN_EMAIL) {
        await resend.emails.send({
          from: process.env.MAIL_FROM || "mohit@aipracticemanagement.com",
          to: ADMIN_EMAIL,
          subject: "New service enquiry",
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || "N/A"}`,
            `Requested Service: ${requestedService}`,
            "",
            "Message:",
            message || "N/A",
          ].join("\n"),
        });
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Service enquiry API error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

