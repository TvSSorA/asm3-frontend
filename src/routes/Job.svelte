<script lang="ts">
    import EditJobModal from './EditJobModal.svelte';
    import DeleteJobModal from './DeleteJobModal.svelte';

    import VNDIcon from '$lib/assets/vnd-icon.svg';

    let { selected_job = $bindable(), username, i, type }: { selected_job: number | null, username: string, i: number, type: "employee" | "company" } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="job {selected_job === i ? "card-bordered border-primary" : ""}" onclick={() => { if (type === "employee") selected_job = i }}>
    <div class="
        card
        bg-base-100
        w-full
        shadow-xl
    ">
        <div class="card-body">
            <div class="card-actions justify-between">
                <h2 class="card-title">Job Title</h2>

                {#if type === "company"}
                    <div class="job-buttons">
                        <EditJobModal {username} />
                        <DeleteJobModal {username} />
                    </div>
                {/if}
            </div>

            <p>Company name</p>

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
                    Salary
                </h1>
            </div>

            {#if type === "company"}
                <div class="requirements">
                    <h2 class="card-title">Job Requirements</h2>
        
                    <ul class="list-disc list-inside">
                        <li>Requirement 1</li>
                        <li>Requirement 2</li>
                        <li>Requirement 3</li>
                    </ul>
                </div>
            {/if}
        </div>
    </div>
</div>