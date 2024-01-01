<script lang="ts">
	import { scaleSqrt } from 'd3-scale';
	import { arc, pie, type PieArcDatum } from 'd3-shape';
	import { Aspect } from '$lib/aspect/aspect';
	import { ASPECT_WHEEL } from '$lib/aspect/aspect-wheel';
	import type { Result } from './result';

	export let scores: ReadonlyMap<Aspect, number>;

	$: results = ASPECT_WHEEL.map(
		(aspect): Result => ({
			aspect,
			score: scores.get(aspect) ?? 0
		})
	);
	// want the max to never be <= min (0), so add 1 as the minimum max
	$: maxScore = Math.max(1, ...scores.values());

	const canvasSize = 300;

	const padAngle = 0.015;
	// generate pie sectors with equal size, the first pointing straight up
	const pieGenerator = pie<Result>()
		.value(1)
		.startAngle((data) => (-1 * Math.PI) / data.length)
		.padAngle(padAngle);
	type ResultArcDatum = PieArcDatum<Result>;
	$: resultSectors = pieGenerator(results) as ResultArcDatum[];

	const outerRadius = canvasSize / 2 - 3;
	const innerRadius = (outerRadius * padAngle) / Math.sin((2 * Math.PI) / ASPECT_WHEEL.length);
	$: radiusScale = scaleSqrt([0, maxScore], [innerRadius, outerRadius]).clamp(true);
	const padRadius = Math.sqrt(innerRadius * innerRadius + outerRadius * outerRadius);
	$: arcGenerator = arc<ResultArcDatum>()
		.innerRadius(innerRadius)
		.outerRadius(({ data }) => radiusScale(data.score))
		.padRadius(padRadius)
		.cornerRadius(3);

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

<svg viewBox="0 0 {canvasSize} {canvasSize}" class="w-full rounded-2xl bg-neutral-200 p-2.5">
	<g transform="translate({canvasSize / 2},{canvasSize / 2})">
		{#each resultSectors as sector}
			{#if sector.data.score > 0}
				<path
					d={arcGenerator(sector)}
					data-aspect={sector.data.aspect}
					class="transition-opacity hover:opacity-80 data-[aspect=blood]:fill-blood data-[aspect=breath]:fill-breath data-[aspect=doom]:fill-doom data-[aspect=heart]:fill-heart data-[aspect=hope]:fill-hope data-[aspect=life]:fill-life data-[aspect=light]:fill-light data-[aspect=mind]:fill-mind data-[aspect=rage]:fill-rage data-[aspect=space]:fill-space data-[aspect=time]:fill-time data-[aspect=void]:fill-void"
				>
					<title>{aspectPhrases[sector.data.aspect]}: {sector.data.score}</title>
				</path>
			{/if}
		{/each}
	</g>
</svg>
