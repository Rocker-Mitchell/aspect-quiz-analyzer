import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = () => {
	return {
		title: 'How It Works',
		description: 'Read about how the Aspect Quiz Analyzer scores answers and organizes results.'
	};
};
