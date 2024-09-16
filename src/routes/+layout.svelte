<script lang="ts">
	import '@fontsource-variable/encode-sans/wdth.css';
	import '@fontsource-variable/saira/wdth.css';
	import '../app.css';
	import type { Page } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	/** Helper method to format the page title. */
	function getTitle(page: Page): string {
		const base = 'Aspect Quiz Analyzer';
		const separator = ' - ';
		if (page.data.title !== undefined && page.data.title.length > 0) {
			return page.data.title + separator + base;
		} else if (page.error) {
			return `${page.status} ${page.error.message}` + separator + base;
		} else {
			return base;
		}
	}

	onMount(() => {
		// flag svelte is ready for integration tests
		document.body.dataset.svelteStarted = 'true';
	});
</script>

<svelte:head>
	<title>{getTitle($page)}</title>
	{#if $page.data.description !== undefined}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

<div class="three-row-cover min-h-full">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
