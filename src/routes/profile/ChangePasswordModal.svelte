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
            />
        </label>

        <div class="modal-action">
            <button class="btn btn-warning">Change Password</button>
        </div>
    </div>
    
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>