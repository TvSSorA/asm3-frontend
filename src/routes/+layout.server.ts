import { error } from "@sveltejs/kit";
import { token_validator } from "$lib/token_validator.js";

export const load = async ({ fetch, cookies }) => {
    const token = cookies.get("token")!;
    if (!token) return { username: "", type: "", first_name: "", last_name: "" };
    
    const { user } = token_validator(token)!;

    const res = await fetch(`/api/user?` + new URLSearchParams({ user }));
    const body: User & ErrorMessage = await res.json(); // TODO: make a type for error responses
    const { username, type, first_name, last_name } = body;

    if (res.status === 200) {
        return { username, type, first_name, last_name };
    }
    else {
        error(res.status, `${res.statusText}: ${body.message}`);
    }
}