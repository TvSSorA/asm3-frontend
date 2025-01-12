<script lang="ts">
    let { selected_job_applicant, title, select_applicant }: { selected_job_applicant: { title: string, username: string}[], title: string, select_applicant: (title: string) => void } = $props();

    let dialog: HTMLDialogElement | undefined = $state();
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button class="btn btn-circle btn-sm btn-info" onclick={() => {
    dialog?.showModal()
    select_applicant(title)
}}>
    <svg 
        fill="#000000"
        width="20px"
        height="20px"
        viewBox="-5 -2 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin" 
        class="jam jam-clipboard"
    >
        <path d='M5 2v2h4V2H5zm6 0h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm0 2a2 2 0 0 
        1-2 2H5a2 2 0 0 1-2-2H2v14h10V4h-1zM4 8h6a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'/>
    </svg>
</button>

<dialog bind:this={dialog} class="modal">
    <div class="modal-box
        flex flex-col gap-4
    ">
        <h3 class="text-lg font-bold">Applicants</h3>
        <ul>
            {#each selected_job_applicant as applicant}
                <li>
                    {applicant.username} - <a href="https://asm3-cv-storage.s3.us-east-1.amazonaws.com/{applicant.username}-cv.jpg" target="_blank" class="text-primary hover:underline">CV</a>
                </li>
            {:else}
                <li>No applicants yet.</li>
            {/each}
        </ul>
    </div>
    
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>