import type { LayoutLoad } from './$types';
import type { HeaderLinks } from './header-links';

export const load: LayoutLoad = () => {
	const headerLinks: HeaderLinks = [{ slug: 'quiz', label: 'Take the Quiz' }];
	return {
		headerLinks
	};
};
