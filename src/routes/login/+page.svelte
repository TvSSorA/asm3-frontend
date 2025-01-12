<script lang="ts">
    import { encryptor } from "$lib/encryptor";

    let username = $state('');
    let password = $state('');

    let message = $state('');

    async function authenticate() {
        const encrypted_password = encryptor(password);

        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password: encrypted_password
            })
        });
        const body: AccessToken & ErrorMessage = await res.json();
        const { token, expires } = body;

        if (res.status === 201) {
            document.cookie = `token=${token}; path=/; SameSite=lax; Expires=${new Date(expires).toUTCString()}; Secure`;
            window.location.href = '/';
        }
        else {
            message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
        }
    }
</script>

<div class="login
    flex justify-center
    py-20
">
    <div class="basic-details
        card
        bg-base-100
        w-2/5
        shadow-xl
    ">
        <div class="card-body
            flex flex-col gap-4
        ">
            <h2 class="card-title">Login</h2>

            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Username</span>
                </div>
    
                <input 
                    type="text"
                    placeholder="Username"
                    class="input input-bordered w-full"
                    bind:value={username}
                />
            </label>
    
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Password</span>
                </div>
    
                <input 
                    type="password"
                    placeholder="Password"
                    class="input input-bordered w-full"
                    bind:value={password}
                />
            </label>

            <p class="text-center">
                Don't have an account yet? <a href="/signup" class="text-primary hover:underline">Sign Up</a>
            </p>

            <h1 class="text-center text-error">{message}</h1>

            <div class="card-actions justify-end">
                <button class="btn btn-primary" onclick={authenticate}>
                    Login
                </button>
            </div>
        </div>
    </div>
</div>