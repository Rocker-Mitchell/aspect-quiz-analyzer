<script lang="ts">
	import { Aspect } from '$lib/aspect/aspect';
	import { sortResults } from './sort-results';

	export let scores: ReadonlyMap<Aspect, number>;

	$: results = sortResults(scores);

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
</script>

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
				class="border-b border-neutral-200 text-lg font-stretch-semi-expanded first:text-2xl first:leading-relaxed last:border-b-0"
			>
				<td class="px-6 py-2 text-left">{aspectPhrases[result.aspect]}</td>
				<td class="px-6 py-2 text-right tabular-nums">{result.score}</td>
			</tr>
		{/each}
	</tbody>
</table>
