<script lang="ts">
    let { username }: { username: string } = $props();

    let message = $state('');

    async function delete_account() {
        const res = await fetch('/api/user', {
            method: 'DELETE',
            body: JSON.stringify({
                username
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

<button class="btn btn-error" onclick={() => document.getElementById('delete_account_modal')?.showModal()}>
    Delete Account
</button>
<dialog id="delete_account_modal" class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Are you really sure?</h3>
        <p class="py-4">This will <strong>completely</strong> delete your account, as well as your posted jobs and profile CV. </p>

        <h1 class="text-center text-error">{message}</h1>

        <div class="modal-action">
            <button class="btn btn-error" onclick={delete_account}>DELETE ACCOUNT</button>
        </div>
    </div>
    
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>