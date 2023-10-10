<script lang="ts">
	import type { PageData } from './$types';
	import ResultsPolarArea from '$lib/results/ResultsPolarArea.svelte';
	import ResultsTable from '$lib/results/ResultsTable.svelte';
	import Section from '$lib/ui/Section.svelte';

	export let data: PageData;
</script>

<Section>
	<div class="container mx-auto space-y-4">
		<h2 class="text-center text-2xl font-stretch-semi-expanded">See your results below</h2>

		<ResultsPolarArea scores={data.scores} />

		<ResultsTable scores={data.scores} />
	</div>
</Section>
