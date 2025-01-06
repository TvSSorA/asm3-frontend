<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import '../app.css';

	let { children } = $props();
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />