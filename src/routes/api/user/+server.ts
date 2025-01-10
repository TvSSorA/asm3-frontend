import { PUBLIC_DB_URL } from "$env/static/public";
import { exception_handler } from "$lib/exception_handler";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
    const username = url.searchParams.get("user");

    if (!username) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/user?` + new URLSearchParams({ username }), {
        method: "GET",
        // TODO: Authorization header
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "NotFoundError") return exception_handler(404, "Not Found", "User not found");
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

export const POST: RequestHandler = async ({ request }) => {
    const body: User = await request.json();
    const { username, password, type, first_name, last_name } = body;

    if (!username || !password || !type || !first_name || !last_name) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
            type,
            first_name,
            last_name
        })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "ConditionalCheckFailedException") return exception_handler(400, "Bad Request", "User already exists");
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

export const PUT: RequestHandler = async ({ request }) => {
    const body: User = await request.json();
    const { username, password } = body;

    if (!username || !password) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/user`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            new_password: password
        })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "NotFoundError") return exception_handler(404, "Not Found", "User not found");
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

export const DELETE: RequestHandler = async ({ request }) => {
    const body: User = await request.json();
    const { username } = body;

    if (!username) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/user`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "NotFoundError") return exception_handler(404, "Not Found", "User not found");
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