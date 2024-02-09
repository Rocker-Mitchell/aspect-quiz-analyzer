<script lang="ts">
	import BigButton from '$lib/ui/BigButton.svelte';
</script>

<section
	class="relative flex h-full flex-col justify-center px-2 py-12 before:absolute before:inset-0 before:-z-10 before:bg-[url(aspect-wheel-bg.svg)] before:bg-cover before:bg-center before:opacity-75"
>
	<div class="mx-auto w-fit space-y-4 rounded-2xl bg-neutral-50 px-3 py-6 shadow-xl">
		<h1
			class="text-center font-saira text-4xl font-bold tracking-tight text-neutral-800 font-stretch-semi-expanded"
		>
			Aspect Quiz Analyzer
		</h1>

		<p class="mx-auto max-w-prose text-pretty text-center">
			Detailed score analysis of the <span class="inline-block">Extended Zodiac's</span> Aspect quiz
		</p>

		<div class="text-center">
			<BigButton type="anchor" href="/quiz">Begin</BigButton>
		</div>
	</div>
</section>
