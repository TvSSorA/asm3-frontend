<button class="btn btn-error" onclick={() => document.getElementById('delete_account_modal')?.showModal()}>
    Delete Account
</button>
<dialog id="delete_account_modal" class="modal">
    <div class="modal-box">
        <h3 class="text-lg font-bold">Are you really sure?</h3>
        <p class="py-4">This will <strong>completely</strong> delete your account, as well as your posted jobs and profile CV. </p>
        <div class="modal-action">
            <button class="btn btn-error">DELETE ACCOUNT</button>
        </div>
    </div>
    
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>