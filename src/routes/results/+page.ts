import type { PageLoad } from './$types';
import { Aspect, isAspect } from '$lib/aspect/aspect';

export const load: PageLoad = ({ url }) => {
	const href = url.href;
	const scores = new Map<Aspect, number>();
	for (const [key, value] of url.searchParams) {
		if (isAspect(key)) {
			const parsedScore = parseInt(value);
			const score = isNaN(parsedScore) ? 0 : parsedScore;
			scores.set(key, score);
		}
	}

	return {
		href,
		scores
	};
};
