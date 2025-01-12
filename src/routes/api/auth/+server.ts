import { PUBLIC_DB_URL } from "$env/static/public";
import { exception_handler } from "$lib/exception_handler";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
    const body: User = await request.json();
    const { username, password } = body;

    if (!username || !password) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "InvalidCredentials") return exception_handler(400, "Bad Request", "Wrong password or username");
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