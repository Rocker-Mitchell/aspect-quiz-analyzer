<script lang="ts">
	import type { PageData } from './$types';
	import { browser } from '$app/environment';
	import ResultsPolarArea from '$lib/results/ResultsPolarArea.svelte';
	import ResultsTable from '$lib/results/ResultsTable.svelte';
	import BigButton from '$lib/ui/BigButton.svelte';
	import ProseHeading from '$lib/ui/ProseHeading.svelte';
	import ProseParagraph from '$lib/ui/ProseParagraph.svelte';
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
		<ProseHeading>See your results below</ProseHeading>

		<div class="grid grid-cols-1-max-xs justify-center gap-4 sm:grid-cols-2-max-xs">
			<ResultsTable scores={data.scores} />

			<div class="space-y-4">
				<ResultsPolarArea scores={data.scores} />

				{#if browser}
					<div class="space-y-2">
						<ProseParagraph class="text-center">
							You can copy &amp; share your results.
						</ProseParagraph>
						<CopyLinkCta href={data.href}></CopyLinkCta>
					</div>
				{/if}

				<div class="space-y-2">
					<ProseParagraph class="text-center">
						You can take the quiz again, changing your answers.
					</ProseParagraph>
					<div class="text-center">
						<SmallButton type="anchor" href="/quiz">Begin Again</SmallButton>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<ZeroStateGraphic></ZeroStateGraphic>

		<ProseHeading>No results</ProseHeading>

		<ProseParagraph class="text-center">Try the test again with different answers.</ProseParagraph>

		<div class="text-center">
			<BigButton type="anchor" href="/quiz">Begin</BigButton>
		</div>
	{/if}
</SpacedContainerSection>
