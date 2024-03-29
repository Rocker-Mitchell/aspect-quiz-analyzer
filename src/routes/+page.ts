import type { PageLoad } from './$types';
import type { HeadData } from '$lib/head-data/head-data';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		description:
			"The Aspect Quiz Analyzer is a fan tool for detailed score analysis of the Extended Zodiac's Aspect quiz."
	} satisfies HeadData;
};
