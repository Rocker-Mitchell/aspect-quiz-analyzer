/**
 * An interface for an HTML head meta description.
 */
export interface HeadDescription {
	description: string;
}

/**
 * Check an object satisfies the {@linkcode HeadDescription} interface.
 */
export function hasHeadDescription<R extends Record<string, unknown>>(
	obj: R
): obj is HeadDescription & R {
	return typeof obj.description === 'string';
}
