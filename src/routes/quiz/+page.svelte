<script lang="ts">
	import { onMount } from 'svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';
	import { AnswerValue } from '$lib/quiz/answer-value';
	import { QUIZ_DATA } from '$lib/quiz/quiz-data';
	import { sessionClear, sessionGet, sessionStore } from '$lib/session-storage/session-storage';
	import BigButton from '$lib/ui/BigButton.svelte';
	import SpacedContainerSection from '$lib/ui/SpacedContainerSection.svelte';

	const questions: {
		name: string;
		legend: string;
		answers: { value: AnswerValue; label: string }[];
	}[] = QUIZ_DATA.map(({ id, legend, answers }) => ({
		name: id,
		legend,
		answers: Object.values(AnswerValue)
			.map((value) => ({ value, label: answers[value].label }))
			.sort(({ value: aValue }, { value: bValue }) => aValue.localeCompare(bValue))
	}));

	const questionBinds: { [key: string]: string | null } = QUIZ_DATA.reduce(
		(acc, { id }) => Object.assign(acc, { [id]: null }),
		{} as { [key: string]: string | null }
	);

	onMount(() => {
		// initialize selected answers from session storage
		Object.keys(questionBinds).forEach((key) => {
			questionBinds[key] = sessionGet(key);
		});
	});

	const onSubmit: SubmitFunction = ({ formData }) => {
		formData.forEach((value, key) => sessionStore(key, value.toString()));
	};

	const onReset = () => {
		Object.keys(questionBinds).forEach((key) => {
			sessionClear(key);
			questionBinds[key] = null;
		});
	};

	const answerValuePhrases: Record<AnswerValue, string> = {
		[AnswerValue.A]: 'A',
		[AnswerValue.B]: 'B',
		[AnswerValue.C]: 'C',
		[AnswerValue.D]: 'D',
		[AnswerValue.E]: 'E'
	};
</script>

<SpacedContainerSection>
	<h2 class="text-center text-2xl font-stretch-semi-expanded">Take the quiz below</h2>

	<form
		method="POST"
		use:enhance={onSubmit}
		on:reset={onReset}
		class="mx-auto w-fit space-y-8 rounded-2xl bg-neutral-200 px-2 py-4 sm:px-4"
	>
		{#each questions as question, questionIndex}
			<fieldset class="space-y-2">
				<legend class="max-w-prose">
					<i>{questionIndex + 1}.</i>
					{question.legend}
				</legend>

				<div class="space-y-2">
					{#each question.answers as answer}
						<label class="flex w-fit max-w-prose cursor-pointer items-center">
							<input
								type="radio"
								name={question.name}
								value={answer.value}
								bind:group={questionBinds[question.name]}
								class="mx-2 shrink-0 cursor-pointer"
							/>
							<span><i>{answerValuePhrases[answer.value]}.</i> {answer.label}</span>
						</label>
					{/each}
				</div>
			</fieldset>
		{/each}

		<div class="flex justify-center gap-3">
			<BigButton type="submit">Submit</BigButton>
			<BigButton type="reset">Reset</BigButton>
		</div>
	</form>
</SpacedContainerSection>
