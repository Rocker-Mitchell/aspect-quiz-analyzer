import type { Aspect } from '$lib/aspect/aspect';
import { adjacentAspects, oppositeAspect } from '$lib/aspect/aspect-wheel';
import type { AnswerValue } from '$lib/quiz/answer-value';
import { AnswerWeight } from '$lib/quiz/answer-weight';
import { QUIZ_DATA } from '$lib/quiz/quiz-data';

/** Add points for an aspect, or set points if the aspect wasn't set. */
function addOrSetScore(scoresMap: Map<Aspect, number>, aspect: Aspect, points: number) {
	const current = scoresMap.get(aspect) ?? 0;
	scoresMap.set(aspect, current + points);
}

/** Add points for an aspect and half for its adjacent aspects. */
function addAnalagousScores(scoresMap: Map<Aspect, number>, aspect: Aspect, points: number) {
	addOrSetScore(scoresMap, aspect, points);

	const halfPoints = points / 2;
	const { next, previous } = adjacentAspects(aspect);
	addOrSetScore(scoresMap, next, halfPoints);
	addOrSetScore(scoresMap, previous, halfPoints);
}

/**
 * Add points for a selected aspect with weight.
 *
 * - Points scaled by weight to the aspect.
 *   - 6 for high weight, 4 for low.
 * - Half the points to adjacent aspects.
 * - 2 points to the opposite aspect.
 * - 1 point to opposite adjacent aspects.
 */
function addScores(
	scoresMap: Map<Aspect, number>,
	aspect: Aspect,
	weight: Exclude<AnswerWeight, AnswerWeight.None>
) {
	const pointsWeight = weight === AnswerWeight.High ? 6 : 4;
	addAnalagousScores(scoresMap, aspect, pointsWeight);

	const opposite = oppositeAspect(aspect);
	addAnalagousScores(scoresMap, opposite, 2);
}

/**
 * Solve the quiz with given answers to get final scores.
 *
 * @param answers Pairs of quiz question IDs and their answers. Unrecognized IDs get ignored.
 * @returns Scores from the answers, in a map of aspects to points.
 */
export function quizSolver(answers: [string, AnswerValue][]): Map<Aspect, number> {
	const scoresMap = new Map<Aspect, number>();

	for (const [answerId, answer] of answers) {
		const quizQuestion = QUIZ_DATA.find(({ id }) => id === answerId);
		if (quizQuestion !== undefined) {
			const quizAnswer = quizQuestion.answers[answer];
			if (quizAnswer.aspect !== null) {
				const { aspect, weight } = quizAnswer;
				addScores(scoresMap, aspect, weight);
			}
		}
	}

	return scoresMap;
}
