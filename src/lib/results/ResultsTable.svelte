<script lang="ts" module>
	import type { ClassProp } from '$lib/props';
	import { Aspect } from '$lib/aspect/aspect';
	import {
		BloodAspectIcon,
		BreathAspectIcon,
		DoomAspectIcon,
		HeartAspectIcon,
		HopeAspectIcon,
		LifeAspectIcon,
		LightAspectIcon,
		MindAspectIcon,
		RageAspectIcon,
		SpaceAspectIcon,
		TimeAspectIcon,
		VoidAspectIcon,
		type AspectIconComponent
	} from '$lib/ui/icon/aspect';
	import { sortResults } from './sort-results';

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
	const aspectIcons: Readonly<Record<Aspect, AspectIconComponent>> = {
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
</script>

<script lang="ts">
	let { scores, class: classProp }: { scores: ReadonlyMap<Aspect, number> } & ClassProp = $props();

	let results = $derived(sortResults(scores));
</script>

<table class="w-full {classProp}">
	<thead>
		<tr>
			<th>Aspect</th>
			<th class="text-right">Score</th>
		</tr>
	</thead>
	<tbody>
		{#each results as result, i (result.aspect)}
			{@const Icon = aspectIcons[result.aspect]}
			<tr class="text-xl font-stretch-semi-expanded first:text-2xl">
				<td>
					<div class="flex items-center gap-2">
						<Icon size={i === 0 ? 'lg' : undefined} />
						<span>{aspectPhrases[result.aspect]}</span>
					</div>
				</td>
				<td class="text-right tabular-nums">{result.score}</td>
			</tr>
		{/each}
	</tbody>
</table>
