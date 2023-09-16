<script lang="ts">
	import Section from '$lib/ui/Section.svelte';

	const questions: { name: string; legend: string; answers: { value: string; label: string }[] }[] =
		[
			{
				name: 'question',
				legend: 'A question',
				answers: [
					{ value: '1', label: 'One' },
					{ value: '2', label: 'Two' },
					{ value: '3', label: 'Three' }
				]
			},
			{
				name: 'question2',
				legend: 'Another question',
				answers: [
					{ value: '1', label: 'Uno' },
					{ value: '2', label: 'Dos' },
					{ value: '3', label: 'Tres' }
				]
			}
		];
</script>

<Section>
	<div class="container mx-auto">
		<h2 class="text-center text-2xl font-stretch-semi-expanded">Take the quiz below</h2>

		<form class="mx-auto w-fit space-y-6 p-2">
			{#each questions as question}
				<fieldset class="space-y-2">
					<legend class="max-w-prose">
						{question.legend}
					</legend>

					<div class="space-y-2">
						{#each question.answers as answer}
							<label class="flex w-fit max-w-prose cursor-pointer items-center">
								<input
									type="radio"
									name={question.name}
									value={answer.value}
									class="mx-2 shrink-0 cursor-pointer"
								/>
								<span>{answer.label}</span>
							</label>
						{/each}
					</div>
				</fieldset>
			{/each}
		</form>
	</div>
</Section>
