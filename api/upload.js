import { put } from "@vercel/blob";

export async function POST(request) {
    try {
        const body = await request.json();
        const { filename, data, contentType } = body;

        if (!filename || !data) {
            return new Response(
                JSON.stringify({ error: "filename and data are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Decode base64 data
        const buffer = Buffer.from(data, "base64");

        const blob = await put(filename, buffer, {
            access: "public",
            contentType: contentType || "application/octet-stream",
        });

        return new Response(
            JSON.stringify({ url: blob.url, filename }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Upload error:", error);
        return new Response(
            JSON.stringify({ error: error.message || "Upload failed" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
