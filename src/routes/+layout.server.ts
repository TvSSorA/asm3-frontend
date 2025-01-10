import { error } from "@sveltejs/kit";

export const load = async ({ fetch }) => {
    let user = "test";

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