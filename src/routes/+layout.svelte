<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import '../app.css';

	let { children, data } = $props();
	const user: Omit<User, "password"> = data;
</script>

<Header {user} />

<main>
	{@render children()}
</main>

<Footer />