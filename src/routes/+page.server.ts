import { error } from "@sveltejs/kit";

export const load = async ({ fetch, parent }) => {
    const user = await parent();

    const res = await fetch('/api/post?' + new URLSearchParams({ title: "" }))
    const body: JobPost[] & ErrorMessage = await res.json(); // TODO: make a type for error responses

    const applicants = await fetch('/api/job')
    const body_applicants = await applicants.json();
    
    if (res.status === 200 && applicants.status === 200) {
        return { user, job_posts: body, job_applicants: body_applicants };
    }
    else {
        error(res.status, `${res.statusText}: ${body.message}`);
    }
}