import { head } from "@vercel/blob";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const url = searchParams.get("url");

        if (!url) {
            return new Response("Missing url parameter", { status: 400 });
        }

        // Get blob metadata to verify it exists and get content type
        const blobDetails = await head(url);

        // Fetch the actual file using the token
        const fileResponse = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
            },
        });

        if (!fileResponse.ok) {
            return new Response("File not found", { status: 404 });
        }

        const fileBuffer = await fileResponse.arrayBuffer();

        return new Response(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": blobDetails.contentType || "application/octet-stream",
                "Content-Disposition": `inline; filename="${blobDetails.pathname?.split("/").pop() || "file"}"`,
                "Cache-Control": "public, max-age=3600",
            },
        });
    } catch (error) {
        console.error("Resume proxy error:", error);
        return new Response("Failed to fetch file", { status: 500 });
    }
}
