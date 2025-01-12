<script lang="ts">
    import UserIcon from '$lib/assets/user.png';
    
    let { user }: { user: Omit<User, "password"> } = $props();
</script>

<header class="bg-neutral p-4">
	<nav class="
		flex flex-row justify-between items-center
		text-base-300
	">
		<a href="/" class="hover:text-base-100 transition">Home</a>
	
		{#if user.username}
			<a href="/profile">
				<div class="avatar">
					<div class="
						w-12
						rounded-full
						bg-base-300 hover:bg-base-100
						transition
					">
						<img src={UserIcon} alt="Profile">
					</div>
				</div>
			</a>
		{:else}
			<a href="/login" class="btn btn-base-100">
				Sign In
			</a>
		{/if}
	</nav>
</header>