import { ASPECT_ORDER, type Aspect } from '$lib/aspect/aspect';
import { oppositeAspect } from '$lib/aspect/aspect-wheel';
import type { Result } from './result';

/**
 * Get an aspect's score from the score map, or zero if the aspect's score isn't set.
 */
function getScoreOrZero(scores: ReadonlyMap<Aspect, number>, aspect: Aspect): number {
	return scores.get(aspect) ?? 0;
}

/**
 * Build a function that checks if an aspect is tied with its opposite in the scores map.
 */
function getIsTiedWithOppositeFn(scores: ReadonlyMap<Aspect, number>): (aspect: Aspect) => boolean {
	const tiedMap = new Map<Aspect, boolean>();

	return (aspect: Aspect) => {
		if (!tiedMap.has(aspect)) {
			const opposite = oppositeAspect(aspect);

			const isTied = getScoreOrZero(scores, aspect) === getScoreOrZero(scores, opposite);
			tiedMap.set(aspect, isTied);
			tiedMap.set(opposite, isTied);
		}

		return tiedMap.get(aspect) ?? false;
	};
}

/**
 * Build a comparator for result objects using a scores map.
 */
function getResultCompareFn(scores: ReadonlyMap<Aspect, number>): (a: Result, b: Result) => number {
	const isTiedWithOpposite = getIsTiedWithOppositeFn(scores);

	return (a: Result, b: Result) => {
		if (a.score !== b.score) {
			return b.score - a.score;
		}

		const aTiedOpposite = isTiedWithOpposite(a.aspect);
		const bTiedOpposite = isTiedWithOpposite(b.aspect);
		if (aTiedOpposite !== bTiedOpposite) {
			return aTiedOpposite ? 1 : -1;
		}

		// NB code would evaluate against aspect order last, but we expect we're in-place
		// sorting an array that was already sorted by aspect order
		return 0;
	};
}

/**
 * Get sorted score results from the given scores map.
 *
 * @param scores A map of aspect scores.
 * @returns A sorted array of result objects tracking aspects and their scores.
 */
export function sortResults(scores: ReadonlyMap<Aspect, number>): Result[] {
	const resultCompare = getResultCompareFn(scores);

	const results = ASPECT_ORDER.map(
		(aspect): Result => ({
			aspect,
			score: getScoreOrZero(scores, aspect)
		})
	);
	return results.sort(resultCompare);
}
