<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';
	import { Aspect } from '$lib/aspect/aspect';
	import type { IconSize } from '$lib/ui/icon/icon-size';
	import BloodAspectIcon from '$lib/ui/icon/BloodAspectIcon.svelte';
	import BreathAspectIcon from '$lib/ui/icon/BreathAspectIcon.svelte';
	import DoomAspectIcon from '$lib/ui/icon/DoomAspectIcon.svelte';
	import HeartAspectIcon from '$lib/ui/icon/HeartAspectIcon.svelte';
	import HopeAspectIcon from '$lib/ui/icon/HopeAspectIcon.svelte';
	import LifeAspectIcon from '$lib/ui/icon/LifeAspectIcon.svelte';
	import LightAspectIcon from '$lib/ui/icon/LightAspectIcon.svelte';
	import MindAspectIcon from '$lib/ui/icon/MindAspectIcon.svelte';
	import RageAspectIcon from '$lib/ui/icon/RageAspectIcon.svelte';
	import SpaceAspectIcon from '$lib/ui/icon/SpaceAspectIcon.svelte';
	import TimeAspectIcon from '$lib/ui/icon/TimeAspectIcon.svelte';
	import VoidAspectIcon from '$lib/ui/icon/VoidAspectIcon.svelte';
	import { sortResults } from './sort-results';

	export let scores: ReadonlyMap<Aspect, number>;

	$: results = sortResults(scores);

	const aspectIcons: Readonly<Record<Aspect, ComponentType<SvelteComponent<{ size?: IconSize }>>>> =
		{
			[Aspect.Time]: TimeAspectIcon,
			[Aspect.Space]: SpaceAspectIcon,
			[Aspect.Heart]: HeartAspectIcon,
			[Aspect.Mind]: MindAspectIcon,
			[Aspect.Hope]: HopeAspectIcon,
			[Aspect.Rage]: RageAspectIcon,
			[Aspect.Light]: LightAspectIcon,
			[Aspect.Void]: VoidAspectIcon,
			[Aspect.Breath]: BreathAspectIcon,
			[Aspect.Blood]: BloodAspectIcon,
			[Aspect.Life]: LifeAspectIcon,
			[Aspect.Doom]: DoomAspectIcon
		};
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

<table class="w-full">
	<thead class="bg-neutral-200">
		<tr class="font-saira font-semibold text-neutral-800 font-stretch-semi-expanded">
			<th class="rounded-tl-lg px-4 py-1.5 text-left">Aspect</th>
			<th class="rounded-tr-lg px-4 py-1.5 text-right">Score</th>
		</tr>
	</thead>
	<tbody>
		{#each results as result, i (result.aspect)}
			<tr class="text-xl font-stretch-semi-expanded first:text-2xl">
				<td class="flex items-center gap-2 px-4 py-3">
					<svelte:component this={aspectIcons[result.aspect]} size={i === 0 ? 'lg' : undefined} />
					<span>{aspectPhrases[result.aspect]}</span>
				</td>
				<td class="px-4 py-3 text-right tabular-nums">{result.score}</td>
			</tr>
		{/each}
	</tbody>
</table>
