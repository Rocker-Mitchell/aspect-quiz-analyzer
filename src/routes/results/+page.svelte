<script lang="ts">
	import type { PageData } from './$types';
	import { Aspect } from '$lib/aspect/aspect';
	import { sortResults } from '$lib/results/sort-results';
	import Section from '$lib/ui/Section.svelte';

	export let data: PageData;

	const aspectPhrases: Readonly<Record<Aspect, string>> = {
		[Aspect.Time]: 'Time',
		[Aspect.Space]: 'Space',
		[Aspect.Heart]: 'Heart',
		[Aspect.Mind]: 'Mind',
		[Aspect.Hope]: 'Hope',
		[Aspect.Rage]: 'Rage',
		[Aspect.Light]: 'Light',
		[Aspect.Void]: 'Void',
		[Aspect.Breath]: 'Breath',
		[Aspect.Blood]: 'Blood',
		[Aspect.Life]: 'Life',
		[Aspect.Doom]: 'Doom'
	};

	$: results = sortResults(data.scores);
</script>

<Section>
	<div class="container mx-auto space-y-4">
		<h2 class="text-center text-2xl font-stretch-semi-expanded">See your results below</h2>

		<table class="mx-auto w-full max-w-xs">
			<thead class="bg-neutral-200">
				<tr class="font-saira font-semibold font-stretch-semi-expanded">
					<th class="px-6 py-2 text-left [font-weight:inherit]">Aspect</th>
					<th class="px-6 py-2 text-right [font-weight:inherit]">Score</th>
				</tr>
			</thead>
			<tbody>
				{#each results as result}
					<tr
						class="group border-b border-neutral-200 text-lg font-stretch-semi-expanded first:text-2xl first:leading-relaxed last:border-b-0"
					>
						<td class="px-6 py-2 text-left">{aspectPhrases[result.aspect]}</td>
						<td class="px-6 py-2 text-right">{result.score}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Section>
