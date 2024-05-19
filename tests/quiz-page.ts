import type { Locator, Page } from '@playwright/test';
import { AppPage, appTest } from './utils';

/**
 * Page Object Model representing the Quiz page.
 */
export class QuizPage {
	private readonly appPage: AppPage;
	/** Locator for the quiz form. */
	readonly form: Locator;
	/** Locator for a quiz question. */
	readonly question: Locator;
	/**
	 * Locator for an answer's radio button.
	 *
	 * It's intended use is for matching within questions, like:
	 *
	 * ```
	 * quizPage.question.nth(0).locator(quizPage.answerRadio)
	 * ```
	 */
	readonly answerRadio: Locator;

	constructor(page: Page, appPage: AppPage) {
		this.appPage = appPage;
		this.form = page.locator('form');
		this.question = this.form.locator('fieldset');
		// NP answerRadio must be matchable through question.locator(),
		//  so only match to elements found within a question
		this.answerRadio = page.getByRole('radio');
	}

	/**
	 * Navigate to the quiz page.
	 */
	async goto() {
		await this.appPage.goto('/quiz');
	}

	/**
	 * Submit the quiz form.
	 */
	async submit() {
		await this.form.getByRole('button', { name: 'submit' }).click();
	}

	/**
	 * Reset the quiz form.
	 */
	async reset() {
		await this.form.getByRole('button', { name: 'reset' }).click();
	}
}

/**
 * Playwright test with a {@link QuizPage} fixture.
 */
export const quizPageTest = appTest.extend<{
	/** A {@link QuizPage} instance, created for each test. */
	quizPage: QuizPage;
}>({
	quizPage: async ({ page, appPage }, use) => {
		await use(new QuizPage(page, appPage));
	}
});
