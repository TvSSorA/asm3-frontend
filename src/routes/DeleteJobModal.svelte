<script lang="ts">
    let { title, username }: { title: string, username: string } = $props();

    let message: string = $state("");

    async function delete_job() {
        const res = await fetch('/api/post', {
            method: 'DELETE',
            body: JSON.stringify({
                title,
                company: username
            })
        });
        const body = await res.json();

        if (res.status === 200) {
            window.location.href = '/';
        }   
        else {
            message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
        }
    }
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button class="btn btn-circle btn-sm btn-error" onclick={() => document.getElementById('delete_job_modal')?.showModal()}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" 
        />
    </svg>
</button>

<dialog id="delete_job_modal" class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Are you really sure?</h3>
        <p class="py-4">This will <strong>completely</strong> delete this job post.</p>

        <h1 class="text-center text-error">{message}</h1>

        <div class="modal-action">
            <button class="btn btn-error" onclick={delete_job}>DELETE JOB</button>
        </div>
    </div>
    
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>