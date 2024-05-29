import type { PageLoad } from './$types';
import { decodeScoresParam } from '$lib/search-params/scores-param';

export const load: PageLoad = ({ url }) => {
	const scores = decodeScoresParam(url.searchParams);
	const hasScores = Array.from(scores.values()).some((s) => s !== 0);

	return {
		title: hasScores ? 'Your Results' : 'No Results',
		description: 'Analyze your scores from the Aspect quiz.',
		/** The page's href. */
		href: url.href,
		/** The scores map received. */
		scores,
		/** Flag that the received scores have non-zero value(s). */
		hasScores
	};
};
