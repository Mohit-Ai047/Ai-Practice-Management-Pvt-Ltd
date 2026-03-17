import { put } from "@vercel/blob";

export async function POST(request) {
    try {
        // Read raw text first (prevents crash)
        const text = await request.text();

        let body;
        try {
            body = JSON.parse(text);
        } catch (e) {
            return new Response(
                JSON.stringify({ error: "Invalid JSON format" }),
                { status: 400 }
            );
        }

        const { filename, data, contentType } = body;

        if (!filename || !data) {
            return new Response(
                JSON.stringify({ error: "filename and data are required" }),
                { status: 400 }
            );
        }

        // Remove base64 prefix if exists
        const cleanBase64 = data.includes(",")
            ? data.split(",")[1]
            : data;

        const buffer = Buffer.from(cleanBase64, "base64");

        const blob = await put(filename, buffer, {
            access: "public",
            contentType: contentType || "application/pdf",
        });

        return new Response(
            JSON.stringify({
                url: blob.url,
                filename,
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Upload error:", error);

        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        );
    }
}