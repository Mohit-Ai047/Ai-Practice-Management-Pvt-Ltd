import express from 'express';
import { sql } from "@vercel/postgres";
import { Resend } from "resend";

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

app.post('/api/contact', async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            service,
            message,
            smsConsent,
        } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "Missing required fields." });
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

        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Contact API error:", error);
        res.status(500).json({ error: "Something went wrong." });
    }
});

export default app;

