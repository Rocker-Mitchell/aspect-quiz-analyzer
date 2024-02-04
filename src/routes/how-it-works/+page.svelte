<script>
	import { Aspect } from '$lib/aspect/aspect';
	import ResultsPolarArea from '$lib/results/ResultsPolarArea.svelte';
	import BigButton from '$lib/ui/BigButton.svelte';
	import Link from '$lib/ui/Link.svelte';
	import ProseHeading from '$lib/ui/ProseHeading.svelte';
	import ProseList from '$lib/ui/ProseList.svelte';
	import ProseParagraph from '$lib/ui/ProseParagraph.svelte';
	import SpacedContainerSection from '$lib/ui/SpacedContainerSection.svelte';

	/** Sample of scores to illustrate points distribution across adjacent & opposite aspects. */
	const sampleScores = new Map([
		[Aspect.Breath, 6],
		[Aspect.Life, 3],
		[Aspect.Hope, 3],
		[Aspect.Blood, 2],
		[Aspect.Doom, 1],
		[Aspect.Rage, 1]
	]);
</script>

<SpacedContainerSection>
	<ProseHeading>How It Works</ProseHeading>

	<ProseParagraph>
		The Extended Zodiac test has multiple parts to complete, but the focus of this fan tool is its
		Aspect quiz. Twelve aspects are available, but the quiz only returns the top aspect&mdash;with
		the quiz logic in a "black box". Fans later figured out scoring models that accurately predict
		the result of the quiz from given answers. The Aspect Quiz Analyzer takes one scoring model and
		shows the results for all aspects for deeper analysis.
	</ProseParagraph>

	<ProseParagraph>
		Two models are known, but the one from <Link
			href="https://aspect-zodiac-quiz.tumblr.com/post/168155175455/the-definitive-guide-to-the-canon-homestuck-aspect"
			target="_blank">Aspect Zodiac Quiz Explained</Link
		> doesn't have as intuitive a points distribution to read for results, with point subtraction possible
		and neutral answers resulting in non-zero scores. Instead, a model from <Link
			href="https://katanahime.tumblr.com/post/168129033014/new-and-improved-extended-zodiac-aspect-quiz"
			target="_blank">Katanahime</Link
		> is used, as it only adds points and has neutral answers resulting in zeros.
	</ProseParagraph>

	<ProseParagraph>
		The Extended Zodiac has a page, <Link
			href="http://hs.hiveswap.com/ezodiac/aboutaspects.php"
			target="_blank">About Aspects</Link
		>, which explains how each aspect is paired to another in opposition, illustrated with a graphic
		of an Aspect Wheel. The models expand on this by observing each aspect is connected to two
		others as sharing similarities. Below is a reproduction of the Aspect Wheel: an aspect has an
		opposite following the diameter and has two adjacent aspects flanking it along the curve.
	</ProseParagraph>

	<img
		src="aspect-wheel.svg"
		alt="The Aspect Wheel. From 12-o-clock moving clockwise: Breath, Life, Light, Time, Heart, Rage, Blood, Doom, Void, Space, Mind, Hope."
		class="mx-auto rounded-2xl bg-neutral-200 p-2.5"
	/>

	<ProseParagraph>Each question in the quiz focuses on an opposing pair of aspects.</ProseParagraph>

	<table class="mx-auto">
		<thead class="bg-neutral-200">
			<tr class="font-saira font-semibold text-neutral-800 font-stretch-semi-expanded">
				<th class="rounded-tl-lg px-4 py-1.5 text-right">Questions</th>
				<th class="rounded-tr-lg px-4 py-1.5 text-left">Aspects</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="px-4 py-2 text-right">1, 2</td>
				<td class="px-4 py-2 text-left">Breath&ndash;Blood</td>
			</tr>
			<tr>
				<td class="px-4 py-2 text-right">3, 4</td>
				<td class="px-4 py-2 text-left">Light&ndash;Void</td>
			</tr>
			<tr>
				<td class="px-4 py-2 text-right">5, 6</td>
				<td class="px-4 py-2 text-left">Time&ndash;Space</td>
			</tr>
			<tr>
				<td class="px-4 py-2 text-right">7, 8</td>
				<td class="px-4 py-2 text-left">Heart&ndash;Mind</td>
			</tr>
			<tr>
				<td class="px-4 py-2 text-right">9, 10</td>
				<td class="px-4 py-2 text-left">Hope&ndash;Rage</td>
			</tr>
			<tr>
				<td class="px-4 py-2 text-right">11, 12</td>
				<td class="px-4 py-2 text-left">Life&ndash;Doom</td>
			</tr>
		</tbody>
	</table>

	<ProseParagraph>
		The answers determine an amount of points to give one of the aspects.
	</ProseParagraph>

	<ProseList
		type="alpha"
		items={[
			'6 points to the aspect',
			'4 points to the aspect',
			'No points given',
			'4 points to the opposite',
			'6 points to the opposite'
		]}
		let:item
	>
		{item}
	</ProseList>

	<ProseParagraph>More points are added by the relationships in the Aspect Wheel.</ProseParagraph>

	<ProseList
		items={[
			'Half as much points (3 from 6, 2 from 4) to adjacent aspects',
			'2 points to the opposite aspect',
			'1 point to aspects adjacent to the opposite'
		]}
		let:item
	>
		{item}
	</ProseList>

	<figure class="mx-auto space-y-1">
		<ResultsPolarArea scores={sampleScores}></ResultsPolarArea>

		<figcaption class="mx-auto w-fit max-w-prose px-2 text-sm">
			Answering <em>A</em> on the first question gives 6 points to Breath, 3 to Hope & Life, 2 to Blood,
			and 1 to Rage & Doom.
		</figcaption>
	</figure>

	<ProseParagraph>
		Points are collected from the answers and summed together. Scores are then sorted by the highest
		value, with two tiebreakers checked when scores are equal. The first tiebreaker evaluates if
		aspects are tied with their opposites; those not tied with an opposite are sorted higher. The
		second tiebreaker uses a "priority list" as a final rule on which aspects are sorted higher.
	</ProseParagraph>

	<ProseList
		type="decimal"
		items={[
			'Time',
			'Space',
			'Heart',
			'Mind',
			'Hope',
			'Rage',
			'Light',
			'Void',
			'Breath',
			'Blood',
			'Life',
			'Doom'
		]}
		let:item
	>
		{item}
	</ProseList>

	<ProseParagraph>
		The Aspect Quiz Analyzer handles all of these calculations for you, so you can get results by
		highest score, with ties handled, and with a visualization of scores arranged by the Aspect
		Wheel. Try it out by clicking below!
	</ProseParagraph>

	<div class="text-center">
		<BigButton type="anchor" href="/quiz">Begin</BigButton>
	</div>
</SpacedContainerSection>
