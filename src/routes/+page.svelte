<script lang="ts">
    import SearchBar from './SearchBar.svelte';
    import Job from './Job.svelte';
    import JobDetails from './JobDetails.svelte';
    import AddJobModal from './AddJobModal.svelte';

    let selected_job: number | null = $state(null);
    let user: boolean = $state(false);
</script>

<div class="home
    flex flex-col items-center gap-8
    py-20
">
    {#if user}
        <h1 class="text-6xl">IT Jobs, made easier.</h1>

        <SearchBar />

        <div class="jobs-wrapper
            flex flex-row gap-6
            w-4/5
        ">
            <div class="jobs-list
                flex flex-col gap-8 basis-5/12
            ">
                {#each Array(2) as _, i}
                    <Job bind:selected_job {i} {user} />
                {/each}
            </div>
            
            <div class="job-display basis-7/12">
                {#if selected_job !== null}
                    <JobDetails />
                {/if}
            </div>
        </div>
    {:else}
        <h1 class="text-6xl">Your job posts</h1>

        <AddJobModal />

        <div class="jobs-wrapper
            grid grid-cols-3 gap-8
            w-4/5
        ">
            {#each Array(6) as _, i}
                <Job bind:selected_job {i} {user} />
            {/each}
        </div>
    {/if}
</div>