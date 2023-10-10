import { Aspect } from '$lib/aspect/aspect';
import { expect, it } from 'vitest';
import { sortResults } from './sort-results';
import type { Result } from './result';

it.each<[string, Map<Aspect, number>, Result[]]>([
	[
		'empty scores',
		new Map(),
		[
			{ aspect: Aspect.Time, score: 0 },
			{ aspect: Aspect.Space, score: 0 },
			{ aspect: Aspect.Heart, score: 0 },
			{ aspect: Aspect.Mind, score: 0 },
			{ aspect: Aspect.Hope, score: 0 },
			{ aspect: Aspect.Rage, score: 0 },
			{ aspect: Aspect.Light, score: 0 },
			{ aspect: Aspect.Void, score: 0 },
			{ aspect: Aspect.Breath, score: 0 },
			{ aspect: Aspect.Blood, score: 0 },
			{ aspect: Aspect.Life, score: 0 },
			{ aspect: Aspect.Doom, score: 0 }
		]
	],
	[
		"only one aspect with score; opposite will move as it's not opposite-tied",
		new Map([[Aspect.Breath, 3]]),
		[
			{ aspect: Aspect.Breath, score: 3 },
			{ aspect: Aspect.Blood, score: 0 },
			{ aspect: Aspect.Time, score: 0 },
			{ aspect: Aspect.Space, score: 0 },
			{ aspect: Aspect.Heart, score: 0 },
			{ aspect: Aspect.Mind, score: 0 },
			{ aspect: Aspect.Hope, score: 0 },
			{ aspect: Aspect.Rage, score: 0 },
			{ aspect: Aspect.Light, score: 0 },
			{ aspect: Aspect.Void, score: 0 },
			{ aspect: Aspect.Life, score: 0 },
			{ aspect: Aspect.Doom, score: 0 }
		]
	],
	[
		'tied scores fall back to aspect order',
		new Map([
			[Aspect.Light, 3],
			[Aspect.Heart, 3]
		]),
		[
			{ aspect: Aspect.Heart, score: 3 },
			{ aspect: Aspect.Light, score: 3 },
			{ aspect: Aspect.Mind, score: 0 },
			{ aspect: Aspect.Void, score: 0 },
			{ aspect: Aspect.Time, score: 0 },
			{ aspect: Aspect.Space, score: 0 },
			{ aspect: Aspect.Hope, score: 0 },
			{ aspect: Aspect.Rage, score: 0 },
			{ aspect: Aspect.Breath, score: 0 },
			{ aspect: Aspect.Blood, score: 0 },
			{ aspect: Aspect.Life, score: 0 },
			{ aspect: Aspect.Doom, score: 0 }
		]
	],
	[
		'tied scores prioritize aspects not tied with their opposite',
		new Map([
			[Aspect.Life, 3],
			[Aspect.Hope, 3],
			[Aspect.Rage, 3]
		]),
		[
			{ aspect: Aspect.Life, score: 3 },
			{ aspect: Aspect.Hope, score: 3 },
			{ aspect: Aspect.Rage, score: 3 },
			{ aspect: Aspect.Doom, score: 0 },
			{ aspect: Aspect.Time, score: 0 },
			{ aspect: Aspect.Space, score: 0 },
			{ aspect: Aspect.Heart, score: 0 },
			{ aspect: Aspect.Mind, score: 0 },
			{ aspect: Aspect.Light, score: 0 },
			{ aspect: Aspect.Void, score: 0 },
			{ aspect: Aspect.Breath, score: 0 },
			{ aspect: Aspect.Blood, score: 0 }
		]
	],
	[
		'scores sort largest to smallest',
		new Map([
			[Aspect.Time, 4],
			[Aspect.Space, 5],
			[Aspect.Heart, 11],
			[Aspect.Mind, 7],
			[Aspect.Hope, 10],
			[Aspect.Rage, 6],
			[Aspect.Light, 8],
			[Aspect.Void, 3],
			[Aspect.Breath, 13],
			[Aspect.Blood, 14],
			[Aspect.Life, 9],
			[Aspect.Doom, 12]
		]),
		[
			{ aspect: Aspect.Blood, score: 14 },
			{ aspect: Aspect.Breath, score: 13 },
			{ aspect: Aspect.Doom, score: 12 },
			{ aspect: Aspect.Heart, score: 11 },
			{ aspect: Aspect.Hope, score: 10 },
			{ aspect: Aspect.Life, score: 9 },
			{ aspect: Aspect.Light, score: 8 },
			{ aspect: Aspect.Mind, score: 7 },
			{ aspect: Aspect.Rage, score: 6 },
			{ aspect: Aspect.Space, score: 5 },
			{ aspect: Aspect.Time, score: 4 },
			{ aspect: Aspect.Void, score: 3 }
		]
	]
])('sorts scores: %s', (_, scores, expected) => {
	expect(sortResults(scores)).to.deep.equal(expected);
});
