import { PUBLIC_DB_URL } from "$env/static/public";
import { exception_handler } from "$lib/exception_handler";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
    const body: CVBody = await request.json();
    const { username, file_content } = body;

    if (!username || !file_content) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/cv`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            file_content
        })
    });
    const data = await res.json();

    if (data.error) {
        return exception_handler(500, "Internal Server Error", "Unexpected Server Error");
    }

    return new Response(JSON.stringify(data), {
        status: 201,
        statusText: "OK",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const DELETE: RequestHandler = async ({ request }) => {
    const body: User = await request.json();
    const { username } = body;

    if (!username) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/cv`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "NotFoundError") return exception_handler(404, "Not Found", "File not found");
        return exception_handler(500, "Internal Server Error", "Unexpected Server Error");
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        statusText: "OK",
        headers: {
            "Content-Type": "application/json"
        }
    });
}