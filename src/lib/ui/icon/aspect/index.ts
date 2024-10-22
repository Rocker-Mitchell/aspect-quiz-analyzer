import type { Component, ComponentProps } from 'svelte';
import type { ChildrenProp } from '$lib/props';
import AspectIconBase from './AspectIconBase.svelte';

/**
 * Props that can be passed to an Aspect icon component.
 */
export type AspectIconProps = Omit<
	ComponentProps<typeof AspectIconBase>,
	'viewBox' | keyof ChildrenProp
>;

/** Type for Aspect icon components. */
export type AspectIconComponent = Component<AspectIconProps>;

export { default as BloodAspectIcon } from './BloodAspectIcon.svelte';
export { default as BreathAspectIcon } from './BreathAspectIcon.svelte';
export { default as DoomAspectIcon } from './DoomAspectIcon.svelte';
export { default as HeartAspectIcon } from './HeartAspectIcon.svelte';
export { default as HopeAspectIcon } from './HopeAspectIcon.svelte';
export { default as LifeAspectIcon } from './LifeAspectIcon.svelte';
export { default as LightAspectIcon } from './LightAspectIcon.svelte';
export { default as MindAspectIcon } from './MindAspectIcon.svelte';
export { default as RageAspectIcon } from './RageAspectIcon.svelte';
export { default as SpaceAspectIcon } from './SpaceAspectIcon.svelte';
export { default as TimeAspectIcon } from './TimeAspectIcon.svelte';
export { default as VoidAspectIcon } from './VoidAspectIcon.svelte';
