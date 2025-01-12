<script lang="ts">
    import EditJobModal from './EditJobModal.svelte';
    import DeleteJobModal from './DeleteJobModal.svelte';
    import ViewApplicantsModal from './ViewApplicantsModal.svelte';

    import VNDIcon from '$lib/assets/vnd-icon.svg';

    let { selected_job_index = $bindable(), job, username, selected_job_applicant, select_applicant, i, type }: { selected_job_index: number | null, job: JobPost, username: string, selected_job_applicant: { title: string, username: string}[], select_applicant: (title: string) => void, i: number, type: "employee" | "company" } = $props();
    const { title, company, salary, requirements } = $derived(job);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="job {selected_job_index === i ? "card-bordered border-primary" : ""}" onclick={() => { if (type === "employee") selected_job_index = i }}>
    <div class="
        card
        bg-base-100
        w-full
        shadow-xl
    ">
        <div class="card-body">
            <div class="card-actions justify-between">
                <h2 class="card-title">{title}</h2>

                {#if type === "company"}
                    <div class="job-buttons">
                        <ViewApplicantsModal {selected_job_applicant} {title} {select_applicant} />
                        <EditJobModal {job} {username} />
                        <DeleteJobModal {title} {username} />
                    </div>
                {/if}
            </div>

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

            {#if type === "company"}
                <div class="requirements">
                    <h2 class="card-title">Job Requirements</h2>
        
                    <ul class="list-disc list-inside">
                        {#each requirements as requirement}
                            <li>{requirement}</li>
                        {/each}
                    </ul>
                </div>
            {/if}
        </div>
    </div>
</div>