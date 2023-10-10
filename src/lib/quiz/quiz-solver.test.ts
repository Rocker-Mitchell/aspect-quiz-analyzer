import { expect, it } from 'vitest';
import { AnswerValue } from './answer-value';
import { Aspect } from '$lib/aspect/aspect';
import { quizSolver } from './quiz-solver';

it.each<[string, [string, AnswerValue][], Map<Aspect, number>]>([
	['empty answers', [], new Map()],
	[
		'major answer ("a") distributes points as expected',
		[['timespace1', AnswerValue.A]],
		new Map([
			[Aspect.Time, 6],
			[Aspect.Light, 3],
			[Aspect.Heart, 3],
			[Aspect.Space, 2],
			[Aspect.Void, 1],
			[Aspect.Mind, 1]
		])
	],
	[
		'major answer ("e") distributes points as expected',
		[['lightvoid1', AnswerValue.E]],
		new Map([
			[Aspect.Void, 6],
			[Aspect.Doom, 3],
			[Aspect.Space, 3],
			[Aspect.Light, 2],
			[Aspect.Life, 1],
			[Aspect.Time, 1]
		])
	],
	[
		'minor answer ("b") distributes points as expected',
		[['heartmind2', AnswerValue.B]],
		new Map([
			[Aspect.Heart, 4],
			[Aspect.Time, 2],
			[Aspect.Rage, 2],
			[Aspect.Mind, 2],
			[Aspect.Space, 1],
			[Aspect.Hope, 1]
		])
	],
	[
		'minor answer ("d") distributes points as expected',
		[['lifedoom2', AnswerValue.D]],
		new Map([
			[Aspect.Doom, 4],
			[Aspect.Blood, 2],
			[Aspect.Void, 2],
			[Aspect.Life, 2],
			[Aspect.Breath, 1],
			[Aspect.Light, 1]
		])
	],
	['non-answer ("c") distributes no points', [['hoperage2', AnswerValue.C]], new Map()],
	[
		'ignores unrecognized answer IDs',
		[
			['badId', AnswerValue.A],
			['breathblood1', AnswerValue.A]
		],
		new Map([
			[Aspect.Breath, 6],
			[Aspect.Hope, 3],
			[Aspect.Life, 3],
			[Aspect.Blood, 2],
			[Aspect.Rage, 1],
			[Aspect.Doom, 1]
		])
	],
	[
		'accumulates points across answers',
		[
			['breathblood1', AnswerValue.B],
			['breathblood2', AnswerValue.A],
			['lightvoid1', AnswerValue.B],
			['lightvoid2', AnswerValue.A],
			['timespace1', AnswerValue.D],
			['timespace2', AnswerValue.D],
			['heartmind1', AnswerValue.D],
			['heartmind2', AnswerValue.B],
			['hoperage1', AnswerValue.B],
			['hoperage2', AnswerValue.D],
			['lifedoom1', AnswerValue.E],
			['lifedoom2', AnswerValue.E]
		],
		new Map([
			[Aspect.Breath, 15],
			[Aspect.Life, 14],
			[Aspect.Light, 14],
			[Aspect.Time, 12],
			[Aspect.Heart, 11],
			[Aspect.Rage, 11],
			[Aspect.Blood, 13],
			[Aspect.Doom, 16],
			[Aspect.Void, 14],
			[Aspect.Space, 13],
			[Aspect.Mind, 13],
			[Aspect.Hope, 14]
		])
	]
])('solve quiz answers: %s', (_, answers, expected) => {
	expect(quizSolver(answers)).to.deep.equal(expected);
});
