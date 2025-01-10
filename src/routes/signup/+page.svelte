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
                />
            </label>
    
            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Password</span>
                </div>
    
                <input 
                    type="text"
                    placeholder="Password"
                    class="input input-bordered w-full"
                />
            </label>

            <label class="form-control w-full">
                <div class="label">
                    <span class="label-text">Confirm Password</span>
                </div>
    
                <input 
                    type="text"
                    placeholder="Confirm Password"
                    class="input input-bordered w-full"
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

            <p class="text-center">
                Already have an account? <a href="/login" class="text-primary hover:underline">Login</a>
            </p>

            <div class="card-actions justify-end">
                <button class="btn btn-primary">
                    Sign Up
                </button>
            </div>
        </div>
    </div>
</div>