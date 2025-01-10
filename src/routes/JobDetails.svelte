<script lang="ts">
    import VNDIcon from '$lib/assets/vnd-icon.svg';

    let { selected_job }: { selected_job: JobPost } = $props();
    const { title, company, salary, requirements } = selected_job;
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

        <button class="btn btn-primary btn-block">
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