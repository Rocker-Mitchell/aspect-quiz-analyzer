import type { PageLoad } from './$types';
import { Aspect, isAspect } from '$lib/aspect/aspect';
import type { HeadData } from '$lib/head-data/head-data';

export const load: PageLoad = ({ url }) => {
	const scores = new Map<Aspect, number>();
	for (const [key, value] of url.searchParams) {
		if (isAspect(key)) {
			const parsedScore = parseInt(value);
			const score = isNaN(parsedScore) ? 0 : parsedScore;
			scores.set(key, score);
		}
	}
	const hasScores = Array.from(scores.values()).some((s) => s !== 0);

	return {
		title: hasScores ? 'Your Results' : 'No Results',
		description: 'Analyze your scores from the Aspect quiz.',
		href: url.href,
		scores,
		hasScores
	} satisfies HeadData;
};
