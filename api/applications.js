import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";

export async function GET(request) {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS job_applications (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                message TEXT,
                resume_name TEXT,
                resume_url TEXT,
                status TEXT DEFAULT 'new',
                created_at TIMESTAMPTZ DEFAULT NOW()
            );
        `;
        await sql`ALTER TABLE job_applications ADD COLUMN IF NOT EXISTS resume_url TEXT;`;

        const result = await sql`SELECT * FROM job_applications ORDER BY id DESC;`;
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("GET Applications error:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch applications" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function POST(request) {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS job_applications (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                message TEXT,
                resume_name TEXT,
                resume_url TEXT,
                status TEXT DEFAULT 'new',
                created_at TIMESTAMPTZ DEFAULT NOW()
            );
        `;
        await sql`ALTER TABLE job_applications ADD COLUMN IF NOT EXISTS resume_url TEXT;`;

        const body = await request.json();
        const { name, email, phone, message, file } = body;

        if (!name || !email || !phone) {
            return new Response(JSON.stringify({ error: "Name, email, and phone are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        let resume_url = null;
        let resume_name = null;

        // Upload file to Vercel Blob if present
        if (file && file.data && file.name) {
            try {
                const cleanBase64 = file.data.includes(",")
                    ? file.data.split(",")[1]
                    : file.data;

                const buffer = Buffer.from(cleanBase64, "base64");

                const blob = await put(file.name, buffer, {
                    access: "private",
                    contentType: file.type || "application/pdf",
                    addRandomSuffix: true,
                });

                resume_url = blob.downloadUrl || blob.url;
                resume_name = file.name;
                console.log("✅ File uploaded:", resume_url);
            } catch (uploadErr) {
                console.error("❌ File upload failed:", uploadErr);
            }
        }

        const result = await sql`
            INSERT INTO job_applications (name, email, phone, message, resume_name, resume_url, status)
            VALUES (${name}, ${email}, ${phone}, ${message || null}, ${resume_name}, ${resume_url}, 'new')
            RETURNING *;
        `;

        console.log("✅ Application saved:", result.rows[0]);

        return new Response(JSON.stringify(result.rows[0]), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("POST Applications error:", error);
        return new Response(JSON.stringify({ error: error.message || "Failed to submit application" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return new Response(JSON.stringify({ error: "Application ID is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        await sql`DELETE FROM job_applications WHERE id = ${id}`;
        return new Response(JSON.stringify({ message: "Application deleted" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("DELETE Applications error:", error);
        return new Response(JSON.stringify({ error: "Failed to delete application" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
