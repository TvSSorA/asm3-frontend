import { PUBLIC_DB_URL } from "$env/static/public";
import { exception_handler } from "$lib/exception_handler";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
    const title = url.searchParams.get("title")!;

    const res = await fetch(`${PUBLIC_DB_URL}/post?` + new URLSearchParams({ title }), {
        method: "GET",
        // TODO: Authorization header
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "NotFoundError") return exception_handler(404, "Not Found", "No posts found");
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
    const body: JobPost = await request.json();
    const { title, company, requirements, salary } = body;

    if (!title || !company || !requirements.length || !salary) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            company,
            requirements,
            salary
        })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "ConditionalCheckFailedException") return exception_handler(400, "Bad Request", "Job already exists");
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
    const body: JobPost = await request.json();
    const { title, company, requirements, salary } = body;

    if (!title || !company || !requirements.length || !salary) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/post`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            company,
            requirements,
            salary
        })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "NotFoundError") return exception_handler(404, "Not Found", "No posts found");
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
    const body: JobPost = await request.json();
    const { title, company } = body;

    if (!title || !company) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/post`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, company })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "NotFoundError") return exception_handler(404, "Not Found", "No posts found");
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