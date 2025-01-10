<script lang="ts">
    import ChangePasswordModal from "./ChangePasswordModal.svelte";
    import DeleteAccountModal from "./DeleteAccountModal.svelte";

    let { user }: { user: Omit<User, "password"> } = $props();
    const { username, first_name, last_name } = user;
</script>

<div class="basic-details
    card
    bg-base-100
    w-2/5
    shadow-xl
">
    <div class="card-body">
        <h2 class="card-title">{first_name} {last_name}</h2>
        <p>{username}</p>
        <div class="card-actions justify-between">
            <ChangePasswordModal {username} />
            <DeleteAccountModal {username} />
        </div>
    </div>
</div>