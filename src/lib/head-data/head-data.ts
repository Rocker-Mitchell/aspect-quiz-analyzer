import type { HeadDescription } from './head-description';
import type { HeadTitle } from './head-title';

/**
 * An object that optionally includes keys for HTML head data.
 */
export type HeadData = Partial<HeadTitle> & Partial<HeadDescription> & Record<string, unknown>;
