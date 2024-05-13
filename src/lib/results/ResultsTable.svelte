<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';
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
		VoidAspectIcon
	} from '$lib/ui/icon/aspect';
	import type { AspectIconSize } from '$lib/ui/icon/aspect/aspect-icon-size';
	import {
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableRoot
	} from '$lib/ui/table';
	import { sortResults } from './sort-results';

	export let scores: ReadonlyMap<Aspect, number>;

	$: results = sortResults(scores);

	const aspectIcons: Readonly<
		Record<Aspect, ComponentType<SvelteComponent<{ size?: AspectIconSize }>>>
	> = {
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

<TableRoot class="w-full {$$props.class || ''}">
	<TableHead>
		<TableHeadCell>Aspect</TableHeadCell>
		<TableHeadCell class="text-right">Score</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each results as result, i (result.aspect)}
			<TableBodyRow class="text-xl font-stretch-semi-expanded first:text-2xl">
				<TableBodyCell>
					<div class="flex items-center gap-2">
						<svelte:component this={aspectIcons[result.aspect]} size={i === 0 ? 'lg' : undefined} />
						<span>{aspectPhrases[result.aspect]}</span>
					</div>
				</TableBodyCell>
				<TableBodyCell class="text-right tabular-nums">{result.score}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableRoot>
