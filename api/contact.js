import { sql } from "@vercel/postgres";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            service,
            message,
            smsConsent,
        } = body || {};

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: "Missing required fields." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Ensure table exists (safe to run multiple times)
        await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        service TEXT,
        message TEXT NOT NULL,
        sms_consent BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

        await sql`
      INSERT INTO contact_messages (name, email, phone, service, message, sms_consent)
      VALUES (${name}, ${email}, ${phone || null}, ${service || null}, ${message}, ${!!smsConsent});
    `;

        // Send confirmation email to user
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: process.env.MAIL_FROM || "mohit@aipracticemanagement.com",
                to: email,
                subject: "We received your message",
                text: `Hi ${name || ""},\n\nThank you for contacting us. We have received your message and will get back to you soon.\n\nMessage:\n${message}\n\nBest regards,\nThe Revenue Haven`,
            });

            // Send full details to admin
            if (ADMIN_EMAIL) {
                await resend.emails.send({
                    from: process.env.MAIL_FROM || "mohit@aipracticemanagement.com", // update verified domain
                    to: ADMIN_EMAIL,
                    subject: "New contact form submission",
                    text: [
                        `Name: ${name}`,
                        `Email: ${email}`,
                        `Phone: ${phone || "N/A"}`,
                        `Service: ${service || "N/A"}`,
                        `SMS Consent: ${smsConsent ? "Yes" : "No"}`,
                        "",
                        "Message:",
                        message,
                    ].join("\n"),
                });
            }
        }

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Contact API error:", error);
        return new Response(
            JSON.stringify({ error: "Something went wrong: " + error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

