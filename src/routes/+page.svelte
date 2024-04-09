<script lang="ts">
	import BigButton from '$lib/ui/BigButton.svelte';
</script>

<section
	class="relative flex h-full flex-col justify-center px-2 py-12 before:absolute before:inset-0 before:-z-10 before:bg-[url(aspect-wheel-bg.svg)] before:bg-cover before:bg-center before:opacity-75"
>
	<div
		class="mx-auto max-w-sm space-y-4 rounded-2xl bg-neutral-50 px-3.5 py-6 text-center shadow-xl sm:max-w-lg"
	>
		<p class="text-balance text-xl font-stretch-semi-expanded sm:text-2xl">
			Detailed score analysis of the Extended Zodiac's Aspect quiz
		</p>

		<p class="text-balance text-xl font-stretch-semi-expanded sm:text-2xl">
			Take the quiz and see your results!
		</p>

		<div>
			<BigButton type="anchor" href="/quiz">Begin</BigButton>
		</div>
	</div>
</section>
