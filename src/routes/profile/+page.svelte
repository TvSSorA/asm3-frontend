<script lang="ts">
    import BasicDetails from "./BasicDetails.svelte";
    import ProfileCV from "./ProfileCV.svelte";

    let { data } = $props();
    const { user }: { user: Omit<User, "password"> } = data;
    const { username } = user;
    
    const { type } = user;
</script>

<div class="profile
    flex flex-col items-center gap-8
    py-20
">
    <BasicDetails {user} />

    {#if type === "employee"}
        <ProfileCV {username} />
    {/if}
</div>