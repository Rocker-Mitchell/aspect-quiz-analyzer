import type { Aspect } from '$lib/aspect/aspect';
import { ASPECT_WHEEL } from '$lib/aspect/aspect-wheel';

const SCORES_PARAM_KEY = 'scores';

/**
 * Serialize a scores map for search params.
 */
export function encodeScoresParam(scores: ReadonlyMap<Aspect, number>): URLSearchParams {
	// map scores to aspect wheel order
	const value = ASPECT_WHEEL.map((aspect) => {
		const score = scores.get(aspect);
		return score !== undefined ? score.toString() : '0';
	}).join(',');
	return new URLSearchParams({
		[SCORES_PARAM_KEY]: value
	});
}

/**
 * Deserialize search params for a scores map.
 */
export function decodeScoresParam(searchParams: URLSearchParams): Map<Aspect, number> {
	// zip scores to aspect wheel order
	const scoresValue = (searchParams.get(SCORES_PARAM_KEY) ?? '').split(',');
	const entries =
		scoresValue.length !== ASPECT_WHEEL.length
			? ASPECT_WHEEL.map((aspect): [Aspect, number] => [aspect, 0])
			: ASPECT_WHEEL.map((aspect, index): [Aspect, number] => {
					const parsedScore = parseInt(scoresValue[index] ?? '0');
					const score = isNaN(parsedScore) ? 0 : parsedScore;
					return [aspect, score];
				});
	return new Map(entries);
}
