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

        // Validation
        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return new Response(
                JSON.stringify({ error: "Name, email, and message are required." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({ error: "Invalid email format." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Ensure table exists
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

        // Insert into database
        await sql`
            INSERT INTO contact_messages (name, email, phone, service, message, sms_consent)
            VALUES (${name.trim()}, ${email.trim()}, ${phone?.trim() || null}, ${service?.trim() || null}, ${message.trim()}, ${!!smsConsent});
        `;

        // Send emails only if API key exists
        if (process.env.RESEND_API_KEY) {
            try {
                // Send confirmation email to user
                const userEmailResult = await resend.emails.send({
                    from: process.env.MAIL_FROM || "mohit@aipracticemanagement.com", // Use onboarding for testing
                    to: email,
                    subject: "We received your message",
                    text: `Hi ${name || ""},\n\nThank you for contacting us. We have received your message and will get back to you soon.\n\nMessage:\n${message}\n\nBest regards,\nThe Team`,
                });

                if (userEmailResult.error) {
                    console.error("Failed to send user email:", userEmailResult.error);
                }

                // Send admin notification
                if (ADMIN_EMAIL) {
                    const adminEmailResult = await resend.emails.send({
                        from: process.env.MAIL_FROM || "mohit@aipracticemanagement.com",
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

                    if (adminEmailResult.error) {
                        console.error("Failed to send admin email:", adminEmailResult.error);
                    }
                }
            } catch (emailError) {
                // Log but don't fail the request - the message was saved to DB
                console.error("Email sending failed:", emailError);
            }
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "Your message has been sent successfully!"
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("Contact API error:", error);

        // More specific error messages
        let errorMessage = "Something went wrong. Please try again later.";

        if (error.code === "23505") { // PostgreSQL unique violation
            errorMessage = "Duplicate entry detected.";
        } else if (error.code === "ECONNREFUSED") {
            errorMessage = "Database connection failed.";
        }

        return new Response(
            JSON.stringify({ error: errorMessage }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}