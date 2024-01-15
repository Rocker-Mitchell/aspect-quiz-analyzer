import { Aspect } from './aspect';

/** Aspect wheel, starting 12 o'clock, moving clockwise. */
export const ASPECT_WHEEL = [
	Aspect.Breath,
	Aspect.Life,
	Aspect.Light,
	Aspect.Time,
	Aspect.Heart,
	Aspect.Rage,
	Aspect.Blood,
	Aspect.Doom,
	Aspect.Void,
	Aspect.Space,
	Aspect.Mind,
	Aspect.Hope
] as const;

export function oppositeAspect(target: Aspect): Aspect {
	const targetIndex = ASPECT_WHEEL.indexOf(target);
	const oppositeIndex = (targetIndex + 6) % 12;
	// NB index is expected to never be out of range of array; cast type as Aspect
	return ASPECT_WHEEL[oppositeIndex] as Aspect;
}

export function adjacentAspects(target: Aspect): { next: Aspect; previous: Aspect } {
	const targetIndex = ASPECT_WHEEL.indexOf(target);
	const nextIndex = (targetIndex + 1) % 12;
	const previousIndex = (targetIndex + 11) % 12;
	// NB indexes are expected to never be out of range of array; cast type as Aspect
	return {
		next: ASPECT_WHEEL[nextIndex] as Aspect,
		previous: ASPECT_WHEEL[previousIndex] as Aspect
	};
}
