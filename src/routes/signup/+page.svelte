<script lang="ts">
    let username: string = $state('');
    let password: string = $state('');
    let confirm_password: string = $state('');
    let first_name: string = $state('');
    let last_name: string = $state('');
    let type: string = $state('employee');

    let error: boolean = $state(false);
    let message: string = $state('');

    async function save_user() {
        if (password !== confirm_password) {
            message = 'Passwords do not match';
            error = true;
            return;
        }

        const res = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                type,
                first_name,
                last_name
            })
        });
        const body = await res.json();

        if (res.status === 201) {
            message = 'Successfully created account! You can now login.';
            error = false;
        }   
        else {
            message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
            error = true;
        }
    }
</script>

<div class="signup
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
            <h2 class="card-title">Sign Up</h2>

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

            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">First Name</span>
                </div>
    
                <input 
                    type="text"
                    placeholder="First Name"
                    class="input input-bordered w-full"
                    bind:value={first_name}
                />
            </label>

            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Last Name</span>
                </div>
    
                <input 
                    type="text"
                    placeholder="Last Name"
                    class="input input-bordered w-full"
                    bind:value={last_name}
                />
            </label>

            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Account Type</span>
                </div>
    
                <div class="type-choices
                    flex flex-row justify-center gap-8
                ">
                    <label class="
                        flex flex-row gap-4
                        label cursor-pointer
                    ">
                        <span class="label-text">Employee</span>

                        <input 
                            type="radio"
                            name="radio-10"
                            class="radio checked:bg-primary"
                        />
                    </label>

                    <label class="
                        flex flex-row gap-4
                        label cursor-pointer
                    ">
                        <span class="label-text">Company</span>

                        <input 
                            type="radio"
                            name="radio-10"
                            class="radio checked:bg-primary"
                        />
                    </label>
                </div>
            </label>

            <h1 class="text-center {error ? "text-error" : "text-success"}">{message}</h1>

            <p class="text-center">
                Already have an account? <a href="/login" class="text-primary hover:underline">Login</a>
            </p>

            <div class="card-actions justify-end">
                <button class="btn btn-primary" onclick={save_user}>
                    Sign Up
                </button>
            </div>
        </div>
    </div>
</div>