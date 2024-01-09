<script lang="ts">
	import type { PageData } from './$types';
	import { browser } from '$app/environment';
	import ResultsPolarArea from '$lib/results/ResultsPolarArea.svelte';
	import ResultsTable from '$lib/results/ResultsTable.svelte';
	import BigButton from '$lib/ui/BigButton.svelte';
	import SmallButton from '$lib/ui/SmallButton.svelte';
	import SpacedContainerSection from '$lib/ui/SpacedContainerSection.svelte';
	import CopyLinkCta from './CopyLinkCta.svelte';
	import ZeroStateGraphic from './ZeroStateGraphic.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<SpacedContainerSection>
	{#if data.hasScores}
		<h2 class="text-center text-2xl font-stretch-semi-expanded">See your results below</h2>

		<div class="grid grid-cols-1-max-xs justify-center gap-4 sm:grid-cols-2-max-xs">
			<ResultsTable class="sm:row-span-4" scores={data.scores} />

			<ResultsPolarArea scores={data.scores} />

			{#if browser}
				<div class="space-y-2">
					<p class="text-center">You can copy &amp; share your results.</p>
					<CopyLinkCta href={data.href}></CopyLinkCta>
				</div>
			{/if}

			<div class="space-y-2">
				<p class="text-center">You can take the quiz again, changing your answers.</p>
				<div class="text-center">
					<SmallButton type="anchor" href="/quiz">Begin Again</SmallButton>
				</div>
			</div>
		</div>
	{:else}
		<ZeroStateGraphic></ZeroStateGraphic>

		<h2 class="text-center text-2xl font-stretch-semi-expanded">No results</h2>

		<p class="text-center">Try the test again with different answers.</p>

		<div class="text-center">
			<BigButton type="anchor" href="/quiz">Begin</BigButton>
		</div>
	{/if}
</SpacedContainerSection>
