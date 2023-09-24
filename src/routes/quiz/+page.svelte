<script lang="ts">
	import { enhance } from '$app/forms';
	import { QUIZ_DATA } from '$lib/quiz/quiz-data';
	import Button from '$lib/ui/Button.svelte';
	import Section from '$lib/ui/Section.svelte';

	const questions: { name: string; legend: string; answers: { value: string; label: string }[] }[] =
		QUIZ_DATA.map(({ id, legend, answers }) => ({
			name: id,
			legend,
			answers: Object.entries(answers)
				.map(([value, { label }]) => ({ value, label }))
				.sort(({ value: aValue }, { value: bValue }) => aValue.localeCompare(bValue))
		}));
</script>

<Section>
	<div class="container mx-auto space-y-4">
		<h2 class="text-center text-2xl font-stretch-semi-expanded">Take the quiz below</h2>

		<form method="POST" use:enhance class="mx-auto w-fit space-y-6 p-2">
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

			<div class="py-3 text-center">
				<Button type="submit">Submit</Button>
			</div>
		</form>
	</div>
</Section>
