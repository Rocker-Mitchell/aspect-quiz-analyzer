<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Section from '$lib/ui/Section.svelte';
</script>

<Section>
	<header class="container mx-auto px-2 py-4 text-center">
		<h1
			class="font-saira text-4xl font-bold tracking-tight text-neutral-800 font-stretch-semi-expanded"
		>
			Aspect Quiz Analyzer
		</h1>
		<p class="font-saira text-lg font-medium opacity-80 font-stretch-semi-expanded">
			Detailed score analysis of the <span class="inline-block">Extended Zodiac's</span> Aspect quiz
		</p>
	</header>

	<div class="container mx-auto space-y-4 bg-neutral-200 px-4 py-8 text-center">
		<h2 class="text-2xl font-stretch-semi-expanded">Take the quiz here!</h2>

		<Button type="anchor" href="/quiz">Begin</Button>
	</div>
</Section>
