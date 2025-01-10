<script lang="ts">
    import UserIcon from '$lib/assets/user.png';
    
    let { user }: { user: Omit<User, "password"> } = $props();
</script>

<header class="bg-neutral p-4">
	<nav class="
		flex flex-row justify-between
		text-base-300
	">
		<div class="logo-and-links
			flex flex-row items-center gap-8
		">
			<div class="logo w-24">
				<a href="/">
					<img
						src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
						alt="Logo"
					>
				</a>
			</div>
	
			<div class="links">
				<a href="/jobs" class="hover:text-base-100 transition">IT Jobs</a>
			</div>
		</div>
	
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