/**
 * An interface for an HTML head title.
 */
export interface HeadTitle {
	title: string;
}

/**
 * Check an object satisfies the {@linkcode HeadTitle} interface.
 */
export function hasHeadTitle<R extends Record<string, unknown>>(obj: R): obj is HeadTitle & R {
	return typeof obj.title === 'string';
}
