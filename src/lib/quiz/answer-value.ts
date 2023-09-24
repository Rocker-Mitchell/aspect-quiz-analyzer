export enum AnswerValue {
	A = 'a',
	B = 'b',
	C = 'c',
	D = 'd',
	E = 'e'
}

const ANSWER_VALUES: ReadonlyArray<AnswerValue> = Object.values(AnswerValue);

export function isAnswerValue(value: unknown): value is AnswerValue {
	return ANSWER_VALUES.some((av) => av === value);
}
