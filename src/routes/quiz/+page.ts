import type { PageLoad } from './$types';
import type { HeadData } from '$lib/head-data/head-data';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		title: 'Take the Quiz',
		description: 'Take the Aspect quiz, and get a detailed score analysis.'
	} satisfies HeadData;
};
