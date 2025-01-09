<script lang="ts">
    import ChangePasswordModal from "./ChangePasswordModal.svelte";
    import DeleteAccountModal from "./DeleteAccountModal.svelte";
</script>

<div class="basic-details
    card
    bg-base-100
    w-2/5
    shadow-xl
">
    <div class="card-body">
        <h2 class="card-title">First Name Last Name</h2>
        <p>username</p>
        <div class="card-actions justify-between">
            <ChangePasswordModal />
            <DeleteAccountModal />
        </div>
    </div>
</div>