import { error } from "@sveltejs/kit";

export const load = async ({ fetch, parent }) => {
    const user = await parent();

    const res = await fetch('/api/post?' + new URLSearchParams({ title: "" }))
    const body: JobPost[] & ErrorMessage = await res.json(); // TODO: make a type for error responses
    
    if (res.status === 200) {
        return { user, job_posts: body };
    }
    else {
        error(res.status, `${res.statusText}: ${body.message}`);
    }
}