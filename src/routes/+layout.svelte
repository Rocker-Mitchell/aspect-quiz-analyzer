<script lang="ts">
	import '@fontsource-variable/encode-sans/wdth.css';
	import '@fontsource-variable/saira/wdth.css';
	import '../app.css';
	import type { Page } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { hasHeadDescription } from '$lib/head-data/head-description';
	import { hasHeadTitle } from '$lib/head-data/head-title';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	function getTitle(page: Page): string {
		const base = 'Aspect Quiz Analyzer';
		const separator = ' - ';
		if (hasHeadTitle(page.data) && page.data.title.length > 0) {
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
	{#if hasHeadDescription($page.data)}
		<meta name="description" content={$page.data.description} />
	{/if}
</svelte:head>

<div class="grid min-h-full grid-rows-[auto_1fr_auto]">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
