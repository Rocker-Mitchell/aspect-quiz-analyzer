import type { PageLoad } from './$types';
import type { HeadData } from '$lib/head-data/head-data';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		title: 'How It Works',
		description: 'Read about how the Aspect Quiz Analyzer scores answers and organizes results.'
	} satisfies HeadData;
};
