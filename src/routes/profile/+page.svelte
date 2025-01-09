<script lang="ts">
    import BasicDetails from "./BasicDetails.svelte";
    import ProfileCV from "./ProfileCV.svelte";

    let user: boolean = $state(false);
</script>

<div class="profile
    flex flex-col items-center gap-8
    py-20
">
    <BasicDetails />

    {#if user}
        <ProfileCV />
    {/if}
</div>