import { PUBLIC_DB_URL } from "$env/static/public";
import { exception_handler } from "$lib/exception_handler";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
    const res = await fetch(`${PUBLIC_DB_URL}/job?`, {
        method: "GET"
    });
    const data = await res.json();

    if (data.error) return exception_handler(500, "Internal Server Error", "Unexpected Server Error");

    return new Response(JSON.stringify(data), {
        status: 200,
        statusText: "OK",
        headers: {
            "Content-Type": "application/json"
        }
    });
}

export const POST: RequestHandler = async ({ request }) => {
    const body: Pick<JobPost, "title"> & Pick<User, "username"> = await request.json();
    const { title, username } = body;

    if (!title || !username) return exception_handler(400, "Bad Request", "Missing required fields");

    const res = await fetch(`${PUBLIC_DB_URL}/job`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            username
        })
    });
    const data = await res.json();

    if (data.error) {
        if (data.error === "ConditionalCheckFailedException") return exception_handler(400, "Bad Request", "You already applied to this job!");
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