import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { AnswerValue, isAnswerValue } from '$lib/quiz/answer-value';
import { quizSolver } from '$lib/quiz/quiz-solver';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const answers = Array.from(formData.entries()).filter(
			(entry: [string, FormDataEntryValue]): entry is [string, AnswerValue] =>
				isAnswerValue(entry[1])
		);
		const solvedMap = quizSolver(answers);

		const searchParams = new URLSearchParams(
			Array.from(solvedMap.entries()).map(([key, value]) => [key, value.toString()])
		);
		throw redirect(303, '/results?' + searchParams.toString());
	}
} satisfies Actions;
