<script lang="ts">
    import SearchBar from './SearchBar.svelte';
    import Job from './Job.svelte';
    import JobDetails from './JobDetails.svelte';
    import AddJobModal from './AddJobModal.svelte';

    let { data } = $props();
    const { user }: { user: Omit<User, "password">  } = data;
    let { job_posts }: { job_posts: JobPost[] } = $state(data);
    const { username, type } = user;

    if (type === "company") {
        job_posts = job_posts.filter(job => job.company === username);
    }

    let message: string = $state("");

    let selected_job_index: number | null = $state(null);
    let selected_job: JobPost | null = $derived(selected_job_index !== null ? job_posts[selected_job_index] : null);
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
                    <Job bind:selected_job_index {job} {username} {i} {type} />
                {/each}
            </div>
            
            <div class="job-display basis-7/12">
                {#if selected_job !== null}
                    <JobDetails {selected_job} />
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
                <Job bind:selected_job_index {job} {username} {i} {type} />
            {/each}
        </div>
    {/if}

    <h1 class="text-center text-error text-4xl">{message}</h1>
</div>