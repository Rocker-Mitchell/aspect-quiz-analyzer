import { describe, expect, it } from 'vitest';
import { Aspect } from './aspect';
import { adjacentAspects, oppositeAspect } from './aspect-wheel';

describe('opposite aspect', () => {
	it.each<[Aspect, Aspect]>([
		[Aspect.Breath, Aspect.Blood],
		[Aspect.Life, Aspect.Doom],
		[Aspect.Light, Aspect.Void],
		[Aspect.Time, Aspect.Space],
		[Aspect.Heart, Aspect.Mind],
		[Aspect.Rage, Aspect.Hope],
		[Aspect.Blood, Aspect.Breath],
		[Aspect.Doom, Aspect.Life],
		[Aspect.Void, Aspect.Light],
		[Aspect.Space, Aspect.Time],
		[Aspect.Mind, Aspect.Heart],
		[Aspect.Hope, Aspect.Rage]
	])('returns opposite of %o', (aspect, expected) => {
		expect(oppositeAspect(aspect)).to.equal(expected);
	});
});

describe('adjacent aspects', () => {
	it.each<[Aspect, [Aspect, Aspect]]>([
		[Aspect.Breath, [Aspect.Hope, Aspect.Life]],
		[Aspect.Life, [Aspect.Breath, Aspect.Light]],
		[Aspect.Light, [Aspect.Life, Aspect.Time]],
		[Aspect.Time, [Aspect.Light, Aspect.Heart]],
		[Aspect.Heart, [Aspect.Time, Aspect.Rage]],
		[Aspect.Rage, [Aspect.Heart, Aspect.Blood]],
		[Aspect.Blood, [Aspect.Rage, Aspect.Doom]],
		[Aspect.Doom, [Aspect.Blood, Aspect.Void]],
		[Aspect.Void, [Aspect.Doom, Aspect.Space]],
		[Aspect.Space, [Aspect.Void, Aspect.Mind]],
		[Aspect.Mind, [Aspect.Space, Aspect.Hope]],
		[Aspect.Hope, [Aspect.Mind, Aspect.Breath]]
	])('returns adjacents of %o', (aspect, expected) => {
		const actual = adjacentAspects(aspect);
		expect(Object.values(actual)).to.have.members(expected);
	});
});
