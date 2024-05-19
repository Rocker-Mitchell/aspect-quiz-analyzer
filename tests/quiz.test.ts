/**
 * @file Integration tests for the quiz page.
 */
import { expect } from '@playwright/test';
import { Aspect } from '$lib/aspect/aspect';
import { decodeScoresParam } from '$lib/search-params/scores-param';
import { quizPageTest as test } from './quiz-page';

test.describe('Submitting quiz', () => {
	test('should redirect to results page', async ({ page, quizPage }) => {
		await quizPage.goto();
		// pick an answer to have valid results
		await quizPage.question.first().locator(quizPage.answerRadio).first().click();
		await quizPage.submit();

		await expect(page).toHaveURL(/\/results/);
	});

	test('should include calculated scores in redirection', async ({ page, quizPage }) => {
		await quizPage.goto();

		await quizPage.question.nth(0).locator(quizPage.answerRadio).nth(1).click();
		await quizPage.question.nth(1).locator(quizPage.answerRadio).nth(0).click();
		await quizPage.question.nth(2).locator(quizPage.answerRadio).nth(1).click();
		await quizPage.question.nth(3).locator(quizPage.answerRadio).nth(0).click();
		await quizPage.question.nth(4).locator(quizPage.answerRadio).nth(3).click();
		await quizPage.question.nth(5).locator(quizPage.answerRadio).nth(3).click();
		await quizPage.question.nth(6).locator(quizPage.answerRadio).nth(3).click();
		await quizPage.question.nth(7).locator(quizPage.answerRadio).nth(1).click();
		await quizPage.question.nth(8).locator(quizPage.answerRadio).nth(1).click();
		await quizPage.question.nth(9).locator(quizPage.answerRadio).nth(3).click();
		await quizPage.question.nth(10).locator(quizPage.answerRadio).nth(4).click();
		await quizPage.question.nth(11).locator(quizPage.answerRadio).nth(4).click();

		await quizPage.submit();
		await page.waitForURL(/\/results/);

		const url = new URL(page.url());
		const scores = decodeScoresParam(url.searchParams);
		expect(scores).toEqual(
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
		);
	});

	test.describe('with JavaScript disabled', () => {
		test.use({ javaScriptEnabled: false });

		test('should still redirect to results page', async ({ page, quizPage }) => {
			await quizPage.goto();
			// pick an answer to have valid results
			await quizPage.question.first().locator(quizPage.answerRadio).first().click();
			await quizPage.submit();

			await expect(page).toHaveURL(/\/results/);
		});
	});
});

test.describe('Quiz answers in session storage', () => {
	test('should repopulate from last quiz submission', async ({ page, quizPage }) => {
		await quizPage.goto();

		const question1AnswerD = quizPage.question.nth(0).locator(quizPage.answerRadio).nth(3);
		const question3AnswerC = quizPage.question.nth(2).locator(quizPage.answerRadio).nth(2);
		const question12AnswerA = quizPage.question.nth(11).locator(quizPage.answerRadio).nth(0);

		await question1AnswerD.click();
		await question3AnswerC.click();
		await question12AnswerA.click();

		await quizPage.submit();
		await page.waitForURL(/\/results/);
		await quizPage.goto();

		await expect(question1AnswerD, 'should have "D" of question 1 checked').toBeChecked();
		await expect(question3AnswerC, 'should have "C" of question 3 checked').toBeChecked();
		await expect(question12AnswerA, 'should have "A" of question 12 checked').toBeChecked();

		const unansweredQuestions = (await quizPage.question.all()).filter(
			(_, i) => ![0, 2, 11].includes(i)
		);
		for (const [i, question] of unansweredQuestions.entries()) {
			for (const [j, radio] of (await question.locator(quizPage.answerRadio).all()).entries()) {
				await expect(
					radio,
					`should not have answer "${String.fromCharCode('A'.charCodeAt(0) + j)}" checked in question ${i + 1}`
				).not.toBeChecked();
			}
		}
	});

	test('should clear storage on form reset', async ({ page, quizPage }) => {
		await quizPage.goto();

		const question8AnswerB = quizPage.question.nth(7).locator(quizPage.answerRadio).nth(1);
		const question10AnswerE = quizPage.question.nth(9).locator(quizPage.answerRadio).nth(4);

		await question8AnswerB.click();
		await question10AnswerE.click();

		await quizPage.submit();
		await page.waitForURL(/\/results/);
		await quizPage.goto();

		await quizPage.reset();
		// navigate away and back to trigger any repopulation
		await page.goto('/');
		await quizPage.goto();

		await expect(question8AnswerB).not.toBeChecked();
		await expect(question10AnswerE).not.toBeChecked();
	});
});
