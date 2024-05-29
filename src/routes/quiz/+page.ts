import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'Take the Quiz',
		description: 'Take the Aspect quiz, and get a detailed score analysis.'
	};
};
