import { put } from "@vercel/blob";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file || typeof file === "string") {
            return new Response(
                JSON.stringify({ error: "No file provided" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Upload to Vercel Blob
        const blob = await put(file.name, file, {
            access: "public",
        });

        return new Response(
            JSON.stringify({ url: blob.url, filename: file.name }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Upload error:", error);
        return new Response(
            JSON.stringify({ error: "Failed to upload file" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
