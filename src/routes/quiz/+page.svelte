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
	<h1>Take the quiz below</h1>

	<form method="POST" use:enhance={onSubmit} on:reset={onReset}>
		{#each questions as question, questionIndex}
			<fieldset>
				<legend>
					<i>{questionIndex + 1}.</i>
					{question.legend}
				</legend>

				{#each question.answers as answer}
					<label class="flex items-center">
						<input
							type="radio"
							name={question.name}
							value={answer.value}
							bind:group={questionBinds[question.name]}
							class="mx-2 shrink-0"
						/>
						<span><i>{answerValuePhrases[answer.value]}.</i> {answer.label}</span>
					</label>
				{/each}
			</fieldset>
		{/each}

		<div class="cluster">
			<BigButton type="submit">Submit</BigButton>
			<BigButton type="reset" color="neutral">Reset</BigButton>
		</div>
	</form>
</SpacedContainerSection>
