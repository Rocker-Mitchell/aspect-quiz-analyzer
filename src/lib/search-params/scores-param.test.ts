import { expect, it } from 'vitest';
import { Aspect } from '$lib/aspect/aspect';
import { ASPECT_WHEEL } from '$lib/aspect/aspect-wheel';
import { decodeScoresParam, encodeScoresParam } from './scores-param';

it.each<[string, Map<Aspect, number>, URLSearchParams]>([
	['empty map', new Map(), new URLSearchParams({ scores: '0,0,0,0,0,0,0,0,0,0,0,0' })],
	[
		'scores of zero',
		new Map([[Aspect.Void, 0]]),
		new URLSearchParams({ scores: '0,0,0,0,0,0,0,0,0,0,0,0' })
	],
	[
		'negative scores',
		new Map([[Aspect.Rage, -3]]),
		new URLSearchParams({ scores: '0,0,0,0,0,-3,0,0,0,0,0,0' })
	],
	[
		'one aspect score',
		new Map([[Aspect.Time, 1]]),
		new URLSearchParams({ scores: '0,0,0,1,0,0,0,0,0,0,0,0' })
	],
	[
		'two aspect scores',
		new Map([
			[Aspect.Blood, 3],
			[Aspect.Mind, 2]
		]),
		new URLSearchParams({ scores: '0,0,0,0,0,0,3,0,0,0,2,0' })
	],
	[
		'full map of aspect scores',
		new Map([
			[Aspect.Doom, 18],
			[Aspect.Blood, 17],
			[Aspect.Life, 16],
			[Aspect.Void, 15],
			[Aspect.Light, 14],
			[Aspect.Breath, 13],
			[Aspect.Time, 11],
			[Aspect.Space, 10],
			[Aspect.Mind, 9],
			[Aspect.Hope, 8],
			[Aspect.Heart, 7],
			[Aspect.Rage, 6]
		]),
		new URLSearchParams({ scores: '13,16,14,11,7,6,17,18,15,10,9,8' })
	]
])('encodes scores map to search param: %s', (_, scores, expected) => {
	expect(encodeScoresParam(scores)).to.deep.equal(expected);
});

/**
 * Helper method to format map of scores with all aspects defined.
 * @param seed Partial map of aspect scores to format with.
 * @returns Scores map with all aspects.
 */
function fullScoresMap(seed: ReadonlyMap<Aspect, number> = new Map()): Map<Aspect, number> {
	const fullScores = ASPECT_WHEEL.map((aspect): [Aspect, number] => {
		const seedValue = seed.get(aspect);
		return [aspect, seedValue !== undefined ? seedValue : 0];
	});
	return new Map(fullScores);
}

it.each<[string, URLSearchParams, Map<Aspect, number>]>([
	['no params', new URLSearchParams(), fullScoresMap()],
	['ignores unrelated params', new URLSearchParams({ dummy: 'dummy' }), fullScoresMap()],
	['empty param value', new URLSearchParams('scores'), fullScoresMap()],
	['bad param value', new URLSearchParams({ scores: 'bad' }), fullScoresMap()],
	['incomplete encoding', new URLSearchParams({ scores: '1,2,3' }), fullScoresMap()],
	[
		'overpopulated encoding',
		new URLSearchParams({ scores: '20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1' }),
		fullScoresMap()
	],
	[
		'unparsable number falls back to 0',
		new URLSearchParams({ scores: '1,2,3,bad,5,6,7,8,9,10,11,12' }),
		new Map([
			[Aspect.Breath, 1],
			[Aspect.Life, 2],
			[Aspect.Light, 3],
			[Aspect.Time, 0],
			[Aspect.Heart, 5],
			[Aspect.Rage, 6],
			[Aspect.Blood, 7],
			[Aspect.Doom, 8],
			[Aspect.Void, 9],
			[Aspect.Space, 10],
			[Aspect.Mind, 11],
			[Aspect.Hope, 12]
		])
	],
	[
		'negative numbers',
		new URLSearchParams({ scores: '0,0,0,0,0,0,0,0,0,0,-5,0' }),
		fullScoresMap(new Map([[Aspect.Mind, -5]]))
	],
	[
		'one score',
		new URLSearchParams({ scores: '0,0,0,0,2,0,0,0,0,0,0,0' }),
		fullScoresMap(new Map([[Aspect.Heart, 2]]))
	],
	[
		'two scores',
		new URLSearchParams({ scores: '0,3,0,0,0,0,0,0,0,0,5,0' }),
		fullScoresMap(
			new Map([
				[Aspect.Life, 3],
				[Aspect.Mind, 5]
			])
		)
	],
	[
		'full scores',
		new URLSearchParams({ scores: '9,8,5,12,3,14,10,7,11,4,13,6' }),
		new Map([
			[Aspect.Breath, 9],
			[Aspect.Life, 8],
			[Aspect.Light, 5],
			[Aspect.Time, 12],
			[Aspect.Heart, 3],
			[Aspect.Rage, 14],
			[Aspect.Blood, 10],
			[Aspect.Doom, 7],
			[Aspect.Void, 11],
			[Aspect.Space, 4],
			[Aspect.Mind, 13],
			[Aspect.Hope, 6]
		])
	]
])('decodes search params to scores map: %s', (_, params, expected) => {
	expect(decodeScoresParam(params)).to.deep.equal(expected);
});

it.each<[string, Map<Aspect, number>, Map<Aspect, number>]>([
	['zero scores', new Map(), fullScoresMap()],
	['one score', new Map([[Aspect.Light, 1]]), fullScoresMap(new Map([[Aspect.Light, 1]]))],
	[
		'two scores',
		new Map([
			[Aspect.Doom, 3],
			[Aspect.Blood, 4]
		]),
		fullScoresMap(
			new Map([
				[Aspect.Blood, 4],
				[Aspect.Doom, 3]
			])
		)
	],
	[
		'full scores',
		new Map([
			[Aspect.Void, 16],
			[Aspect.Time, 15],
			[Aspect.Blood, 14],
			[Aspect.Hope, 13],
			[Aspect.Life, 12],
			[Aspect.Light, 11],
			[Aspect.Space, 10],
			[Aspect.Rage, 9],
			[Aspect.Mind, 8],
			[Aspect.Breath, 7],
			[Aspect.Doom, 6],
			[Aspect.Heart, 5]
		]),
		new Map([
			[Aspect.Breath, 7],
			[Aspect.Life, 12],
			[Aspect.Light, 11],
			[Aspect.Time, 15],
			[Aspect.Heart, 5],
			[Aspect.Rage, 9],
			[Aspect.Blood, 14],
			[Aspect.Doom, 6],
			[Aspect.Void, 16],
			[Aspect.Space, 10],
			[Aspect.Mind, 8],
			[Aspect.Hope, 13]
		])
	]
])('encoding flows into decoding: %s', (_, scores, expected) => {
	expect(decodeScoresParam(encodeScoresParam(scores))).to.deep.equal(expected);
});
