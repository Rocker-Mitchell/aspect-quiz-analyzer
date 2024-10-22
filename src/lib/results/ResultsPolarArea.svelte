<script lang="ts" module>
	import { scaleSqrt, type ScaleContinuousNumeric } from 'd3-scale';
	import { arc, pie, pointRadial, type PieArcDatum } from 'd3-shape';
	import { Aspect } from '$lib/aspect/aspect';
	import { ASPECT_WHEEL } from '$lib/aspect/aspect-wheel';
	import type { Result } from './result';

	const canvasSize = 300;
	const fontSize = 14;
	const lineHeight = 20; // should be greater than fontSize
	const textPad = 2;
	const padAngle = 0.015;

	const textCenterRadius = canvasSize / 2 - lineHeight / 2;
	const outerRadius = canvasSize / 2 - lineHeight - textPad;
	const innerRadius = (outerRadius * padAngle) / Math.sin((2 * Math.PI) / ASPECT_WHEEL.length);
	const padRadius = Math.sqrt(innerRadius * innerRadius + outerRadius * outerRadius);

	/** Generator of pie arc data with equal angle size, the first pointing straight up. */
	const pieGenerator = pie<Result>()
		.value(1)
		.startAngle((data) => (-1 * Math.PI) / data.length)
		.padAngle(padAngle);
	type ResultArcDatum = PieArcDatum<Result>;

	/**
	 * Generator of pie arc path data.
	 *
	 * An extra argument is expected to be passed for a scale to calculate the
	 * outer radius.
	 *
	 * Prefer {@linkcode getArcData} to satisfy argument type requirements.
	 */
	const _arcGenerator = arc<ResultArcDatum>()
		.innerRadius(innerRadius)
		.outerRadius(({ data }, radiusScale: ScaleContinuousNumeric<number, number>) =>
			radiusScale(data.score)
		)
		.padRadius(padRadius)
		.cornerRadius(3);
	/** Wrapper function of arc generator with stricter typing. */
	function getArcData(data: ResultArcDatum, radiusScale: ScaleContinuousNumeric<number, number>) {
		return _arcGenerator(data, radiusScale);
	}

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

<script lang="ts">
	let { scores }: { scores: ReadonlyMap<Aspect, number> } = $props();

	let results = $derived(
		ASPECT_WHEEL.map(
			(aspect): Result => ({
				aspect,
				score: scores.get(aspect) ?? 0
			})
		)
	);
	// want the max to never be <= min (0), so add 1 as the minimum max
	let maxScore = $derived(Math.max(1, ...scores.values()));

	let resultSectors = $derived(pieGenerator(results));

	/** Scale of scores to a sector radius. */
	let radiusScale = $derived(scaleSqrt([0, maxScore], [innerRadius, outerRadius]).clamp(true));

	let sectorLabels = $derived(
		results.map(({ aspect, score }, index, arr) => {
			const angleDeg = (index * 360) / arr.length;
			const coords = pointRadial((angleDeg * Math.PI) / 180, textCenterRadius);
			return {
				cx: coords[0],
				cy: coords[1],
				// angles that would rotate text upside down should be further rotated 180 to be upright
				angleDeg: angleDeg > 90 && angleDeg < 270 ? angleDeg - 180 : angleDeg,
				text: aspectPhrases[aspect] + ' ' + score
			};
		})
	);
</script>

<svg
	data-test-id="resultsPolarArea"
	viewBox="0 0 {canvasSize} {canvasSize}"
	style:max-width="{canvasSize}px"
	class="mx-auto box-content rounded-2xl bg-neutral-200 p-2.5"
>
	<g transform="translate({canvasSize / 2},{canvasSize / 2})">
		{#each resultSectors as sector}
			{#if sector.data.score > 0}
				<path
					d={getArcData(sector, radiusScale)}
					class:fill-blood={sector.data.aspect === Aspect.Blood}
					class:fill-breath={sector.data.aspect === Aspect.Breath}
					class:fill-doom={sector.data.aspect === Aspect.Doom}
					class:fill-heart={sector.data.aspect === Aspect.Heart}
					class:fill-hope={sector.data.aspect === Aspect.Hope}
					class:fill-life={sector.data.aspect === Aspect.Life}
					class:fill-light={sector.data.aspect === Aspect.Light}
					class:fill-mind={sector.data.aspect === Aspect.Mind}
					class:fill-rage={sector.data.aspect === Aspect.Rage}
					class:fill-space={sector.data.aspect === Aspect.Space}
					class:fill-time={sector.data.aspect === Aspect.Time}
					class:fill-void={sector.data.aspect === Aspect.Void}
				/>
			{/if}
		{/each}
		{#each sectorLabels as label}
			<text
				x={label.cx}
				y={label.cy}
				font-size={fontSize}
				text-anchor="middle"
				dominant-baseline="central"
				transform="rotate({label.angleDeg},{label.cx},{label.cy})"
				class="fill-neutral-900/90 font-medium">{label.text}</text
			>
		{/each}
	</g>
</svg>
