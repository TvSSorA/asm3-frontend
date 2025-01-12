<script lang="ts">
    import VNDIcon from '$lib/assets/vnd-icon.svg';

    let { selected_job, username }: { selected_job: JobPost, username: string } = $props();
    const { title, company, salary, requirements } = $derived(selected_job);

    let message = $state('');
    let error = $state(false);

    async function apply_job() {
        const res = await fetch('/api/job', {
            method: 'POST',
            body: JSON.stringify({
                title,
                username
            })
        });
        const body = await res.json();

        if (res.status === 201) {
            message = 'Successfully applied for job!';
            error = false;
        }   
        else {
            message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
            error = true;
        }
    }
</script>

<div class="
    card
    bg-base-100
    w-full
    shadow-xl
">
    <div class="card-body
        flex flex-col gap-8
    ">
        <div class="basic-details
            flex flex-col gap-2
        ">
            <h2 class="card-title">{title}</h2>
            <p>{company}</p>

            <div class="salary
                flex flex-row items-center gap-2
            ">
                <div class="vnd-icon w-5">
                    <img src={VNDIcon} alt="VND Icon">
                </div>
                
                <h1 class="
                    card-title
                    text-accent underline
                ">
                    {salary}
                </h1>
            </div>
        </div>

        <h1 class="text-center {error ? "text-error" : "text-success"}">{message}</h1>

        <button class="btn btn-primary btn-block" onclick={apply_job}>
            Apply Now
        </button>

        <div class="requirements">
            <h2 class="card-title">Job Requirements</h2>

            <ul class="list-disc list-inside">
                {#each requirements as requirement}
                    <li>{requirement}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>