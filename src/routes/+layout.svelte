<script lang="ts">
	import '@fontsource-variable/encode-sans/wdth.css';
	import '@fontsource-variable/saira/wdth.css';
	import '../app.css';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ChildrenProp } from '$lib/props';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let { children }: ChildrenProp = $props();

	let title = $derived.by(() => {
		const base = 'Aspect Quiz Analyzer';
		const separator = ' - ';
		if ($page.data.title !== undefined && $page.data.title.length > 0) {
			return $page.data.title + separator + base;
		} else if ($page.error) {
			return `${$page.status} ${$page.error.message}` + separator + base;
		} else {
			return base;
		}
	});

	let description = $derived($page.data.description);

	onMount(() => {
		// flag svelte is ready for integration tests
		document.body.dataset.svelteStarted = 'true';
	});
</script>

<svelte:head>
	<title>{title}</title>
	{#if description !== undefined}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<div class="three-row-cover min-h-full">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
