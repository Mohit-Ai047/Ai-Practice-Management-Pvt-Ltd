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

        // Add resume_url column if it doesn't exist (for existing tables)
        await sql`ALTER TABLE job_applications ADD COLUMN IF NOT EXISTS resume_url TEXT;`;

        const result = await sql`SELECT * FROM job_applications ORDER BY id DESC;`;
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("GET Applications error:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch applications" }), { status: 500, headers: { "Content-Type": "application/json" } });
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
        const { name, email, phone, message, resume_name, resume_url } = body;

        if (!name || !email || !phone) {
            return new Response(JSON.stringify({ error: "Name, email, and phone are required" }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        const result = await sql`
            INSERT INTO job_applications (name, email, phone, message, resume_name, resume_url)
            VALUES (${name}, ${email}, ${phone}, ${message || null}, ${resume_name || null}, ${resume_url || null})
            RETURNING *;
        `;

        return new Response(JSON.stringify(result.rows[0]), { status: 201, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error("POST Applications error:", error);
        return new Response(JSON.stringify({ error: "Failed to submit application" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return new Response(JSON.stringify({ error: "Application ID is required" }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        await sql`DELETE FROM job_applications WHERE id = ${id}`;
        return new Response(JSON.stringify({ message: "Application deleted" }), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error("DELETE Applications error:", error);
        return new Response(JSON.stringify({ error: "Failed to delete application" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}
