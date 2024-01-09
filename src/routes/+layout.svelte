<script lang="ts">
	import '@fontsource-variable/encode-sans/wdth.css';
	import '@fontsource-variable/saira/wdth.css';
	import '../app.css';
	import { page } from '$app/stores';
	import { hasHeadDescription } from '$lib/head-data/head-description';
	import { hasHeadTitle } from '$lib/head-data/head-title';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	const appTitle = 'Aspect Quiz Analyzer';
	$: fullTitle =
		hasHeadTitle($page.data) && $page.data.title.length > 0
			? `${$page.data.title} - ${appTitle}`
			: appTitle;
</script>

<svelte:head>
	<title>{fullTitle}</title>
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
