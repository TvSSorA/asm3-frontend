<script lang="ts">
    let { job_posts = $bindable(), message = $bindable() }: { job_posts: JobPost[], message: string } = $props();

    let title: string = $state('');

    async function find_jobs() {
        const res = await fetch('/api/post?' + new URLSearchParams({ title }));
        const body = await res.json();

        if (res.status === 200) {
            job_posts = body;
            message = '';
        }
        else if (res.status === 404) {
            job_posts = [];
            message = 'No jobs found';
        }
        else {
            message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
        }
    }
</script>

<div class="search-bar
    flex flex-row items-center gap-4
    w-4/5
">
    <input
        type="text"
        placeholder="Filter by job title..."
        class="
            input input-bordered input-lg
            w-full
        "
        bind:value={title}
    />

    <button class="btn btn-primary btn-lg" onclick={find_jobs}>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 
                6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            />
        </svg>
        Search
    </button>
</div>