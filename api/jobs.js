import { sql } from "@vercel/postgres";

export async function GET(request) {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS jobs (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                location TEXT,
                status TEXT DEFAULT 'active',
                created_at TIMESTAMPTZ DEFAULT NOW()
            );
        `;
        const { searchParams } = new URL(request.url);
        const admin = searchParams.get('admin');

        // If admin, return all jobs; if public, return only active ones
        let jobs;
        if (admin) {
            jobs = await sql`SELECT * FROM jobs ORDER BY id DESC;`;
        } else {
            jobs = await sql`SELECT * FROM jobs WHERE status = 'active' ORDER BY id DESC;`;
        }

        return new Response(JSON.stringify(jobs.rows), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("GET Jobs error:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch jobs" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { title, description, location, status } = body;

        if (!title || !description) {
            return new Response(JSON.stringify({ error: "Title and description are required" }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        const result = await sql`
            INSERT INTO jobs (title, description, location, status)
            VALUES (${title}, ${description}, ${location || null}, ${status || 'active'})
            RETURNING *;
        `;

        return new Response(JSON.stringify(result.rows[0]), { status: 201, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error("POST Jobs error:", error);
        return new Response(JSON.stringify({ error: "Failed to create job" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

export async function PUT(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        const body = await request.json();
        const { title, description, location, status } = body;

        if (!id) {
            return new Response(JSON.stringify({ error: "Job ID is required" }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        const result = await sql`
            UPDATE jobs
            SET title = ${title},
                description = ${description},
                location = ${location || null},
                status = ${status || 'active'}
            WHERE id = ${id}
            RETURNING *;
        `;

        if (result.rowCount === 0) {
            return new Response(JSON.stringify({ error: "Job not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
        }

        return new Response(JSON.stringify(result.rows[0]), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error("PUT Jobs error:", error);
        return new Response(JSON.stringify({ error: "Failed to update job" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return new Response(JSON.stringify({ error: "Job ID is required" }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        await sql`DELETE FROM jobs WHERE id = ${id}`;

        return new Response(JSON.stringify({ message: "Job deleted successfully" }), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error("DELETE Jobs error:", error);
        return new Response(JSON.stringify({ error: "Failed to delete job" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}
