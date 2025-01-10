export function exception_handler(status_code: number, status_text: string, message: string): Response {
    return new Response(JSON.stringify({ message: message }), {
        status: status_code,
        statusText: status_text,
        headers: {
            "Content-Type": "application/json"
        }
    });
}