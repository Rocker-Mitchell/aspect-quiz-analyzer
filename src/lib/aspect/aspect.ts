export enum Aspect {
	Time = 'time',
	Space = 'space',
	Heart = 'heart',
	Mind = 'mind',
	Hope = 'hope',
	Rage = 'rage',
	Light = 'light',
	Void = 'void',
	Breath = 'breath',
	Blood = 'blood',
	Life = 'life',
	Doom = 'doom'
}

export const ASPECT_ORDER = [
	Aspect.Time,
	Aspect.Space,
	Aspect.Heart,
	Aspect.Mind,
	Aspect.Hope,
	Aspect.Rage,
	Aspect.Light,
	Aspect.Void,
	Aspect.Breath,
	Aspect.Blood,
	Aspect.Life,
	Aspect.Doom
] as const;

export function isAspect(value: unknown): value is Aspect {
	return ASPECT_ORDER.some((aspect) => aspect === value);
}
