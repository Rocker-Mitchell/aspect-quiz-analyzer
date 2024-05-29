import type { Aspect } from '$lib/aspect/aspect';
import { adjacentAspects, oppositeAspect } from '$lib/aspect/aspect-wheel';
import type { AnswerValue } from '$lib/quiz/answer-value';
import { AnswerWeight } from '$lib/quiz/answer-weight';
import { QUIZ_DATA } from '$lib/quiz/quiz-data';

/**
 * Add points for an aspect in a scores map, or set points if the aspect wasn't set in the map yet.
 */
function addOrSetScore(scoresMap: Map<Aspect, number>, aspect: Aspect, points: number) {
	const current = scoresMap.get(aspect) ?? 0;
	scoresMap.set(aspect, current + points);
}

/**
 * Add points for an analogous group of aspects in a scores map.
 *
 * The given aspect gets the given points, and adjacent aspects get half of the points.
 */
function addAnalogousScores(scoresMap: Map<Aspect, number>, aspect: Aspect, points: number) {
	addOrSetScore(scoresMap, aspect, points);

	const halfPoints = points / 2;
	const { next, previous } = adjacentAspects(aspect);
	addOrSetScore(scoresMap, next, halfPoints);
	addOrSetScore(scoresMap, previous, halfPoints);
}

/**
 * Add points for a selected aspect with weight.
 *
 * - Points are scaled by weight, and added to the given aspect.
 *   - 6 points for a high weight, 4 for low.
 * - Half of the points are added to adjacent aspects.
 * - 2 points are added to the opposite aspect.
 * - 1 point is added to opposite adjacent aspects.
 */
function addScores(
	scoresMap: Map<Aspect, number>,
	aspect: Aspect,
	weight: Exclude<AnswerWeight, AnswerWeight.None>
) {
	const pointsWeight = weight === AnswerWeight.High ? 6 : 4;
	addAnalogousScores(scoresMap, aspect, pointsWeight);

	const opposite = oppositeAspect(aspect);
	addAnalogousScores(scoresMap, opposite, 2);
}

/**
 * Solve the quiz with the given answers to get final scores.
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
