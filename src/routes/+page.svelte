<script lang="ts">
    import SearchBar from './SearchBar.svelte';
    import Job from './Job.svelte';
    import JobDetails from './JobDetails.svelte';
    import AddJobModal from './AddJobModal.svelte';

    let { data } = $props();
    const { user, job_applicants }: { user: Omit<User, "password">, job_applicants: { title: string, username: string}[] } = data;
    let { job_posts }: { job_posts: JobPost[] } = $state(data);
    const { username, type } = user;

    if (type === "company") {
        job_posts = job_posts.filter(job => job.company === username);
    }

    let message: string = $state("");

    let selected_job_index: number | null = $state(null);
    let selected_job: JobPost | null = $derived(selected_job_index !== null ? job_posts[selected_job_index] : null);

    let selected_job_applicant: { title: string, username: string}[] = $state([]);
    function select_applicant(title: string) {
        selected_job_applicant = job_applicants.filter(applicant => applicant.title === title);
    }
</script>

<div class="home
    flex flex-col items-center gap-8
    py-20
">
    {#if type === "employee"}
        <h1 class="text-6xl">IT Jobs, made easier.</h1>

        <SearchBar bind:job_posts bind:message />

        <div class="jobs-wrapper
            flex flex-row gap-6
            w-4/5
        ">
            <div class="jobs-list
                flex flex-col gap-8 basis-5/12
            ">
                {#each job_posts as job, i}
                    <Job bind:selected_job_index {job} {username} {selected_job_applicant} {select_applicant} {i} {type} />
                {/each}
            </div>
            
            <div class="job-display basis-7/12">
                {#if selected_job !== null}
                    <JobDetails {username} {selected_job} />
                {/if}
            </div>
        </div>
    {:else if type === "company"}
        <h1 class="text-6xl">Your job posts</h1>

        <AddJobModal {username} />

        <div class="jobs-wrapper
            grid grid-cols-3 gap-8
            w-4/5
        ">
            {#each job_posts as job, i}
                <Job bind:selected_job_index {job} {username} {selected_job_applicant} {select_applicant} {i} {type} />
            {/each}
        </div>
    {:else}
        <h1 class="text-6xl">COSC2822 - Cloud Developing</h1>
        <h2 class="text-4xl">Assignment 3 - Group Project</h2>
        <h3 class="text-2xl">Final Product</h3>

        <a href="/login" class="btn btn-primary">
            Sign In
        </a>
    {/if}

    <h1 class="text-center text-error text-4xl">{message}</h1>
</div>