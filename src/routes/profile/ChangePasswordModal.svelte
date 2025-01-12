<script lang="ts">
    import { encryptor } from "$lib/encryptor";

    let { username }: { username: string } = $props();

    let password: string = $state('');
    let confirm_password: string = $state('');

    let error: boolean = $state(false);
    let message: string = $state('');

    async function change_password() {
        if (password !== confirm_password) {
            message = 'Passwords do not match';
            error = true;
            return;
        }

        const encrypted_password = encryptor(password);

        const res = await fetch('/api/user', {
            method: 'PUT',
            body: JSON.stringify({
                username,
                password: encrypted_password
            })
        });
        const body = await res.json();

        if (res.status === 200) {
            message = 'Password successfully changed!';
            error = false;
        }   
        else {
            message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
            error = true;
        }
    }
</script>

<button class="btn btn-warning" onclick={() => document.getElementById('change_password_modal')?.showModal()}>
    Change Password
</button>
<dialog id="change_password_modal" class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Change Password</h3>

        <label class="form-control w-full">
            <div class="label">
                <span class="label-text">New Password</span>
            </div>

            <input 
                type="password"
                placeholder="New Password"
                class="input input-bordered w-full"
                bind:value={password}
            />
        </label>

        <label class="form-control w-full">
            <div class="label">
                <span class="label-text">Confirm Password</span>
            </div>

            <input 
                type="password"
                placeholder="Confirm Password"
                class="input input-bordered w-full"
                bind:value={confirm_password}
            />
        </label>

        <h1 class="text-center {error ? "text-error" : "text-success"}">{message}</h1>

        <div class="modal-action">
            <button class="btn btn-warning" onclick={change_password}>Change Password</button>
        </div>
    </div>
    
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>