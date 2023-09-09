export type AnswerKeys = 'a' | 'b' | 'c' | 'd' | 'e';

export interface Question {
  readonly id: string;
  readonly text: string;
  readonly answers: Readonly<Record<AnswerKeys, string>>;
}
