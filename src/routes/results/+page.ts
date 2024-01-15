import type { PageLoad } from './$types';
import type { HeadData } from '$lib/head-data/head-data';
import { decodeScoresParam } from '$lib/search-params/scores-param';

export const load: PageLoad = ({ url }) => {
	const scores = decodeScoresParam(url.searchParams);
	const hasScores = Array.from(scores.values()).some((s) => s !== 0);

	return {
		title: hasScores ? 'Your Results' : 'No Results',
		description: 'Analyze your scores from the Aspect quiz.',
		href: url.href,
		scores,
		hasScores
	} satisfies HeadData;
};
