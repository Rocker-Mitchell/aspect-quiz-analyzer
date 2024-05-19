import type { Locator, Page } from '@playwright/test';
import { AppPage, appTest } from './utils';

/**
 * Page Object Model representing the Results page.
 */
export class ResultsPage {
	private readonly appPage: AppPage;
	/** Locator for the table of results. */
	readonly resultsTable: Locator;
	/** Locator for the polar area visualization of results. */
	readonly resultsPolarArea: Locator;
	/** Locator for heading that shows for no results. */
	readonly noResultsHeading: Locator;
	/** Locator for button that copies link to clipboard. */
	readonly copyLinkButton: Locator;
	/** Locator for feedback message on successfully copying to clipboard. */
	readonly copySuccessFeedback: Locator;

	constructor(page: Page, appPage: AppPage) {
		this.appPage = appPage;
		this.resultsTable = page.getByRole('table');
		this.resultsPolarArea = page.getByTestId('resultsPolarArea');
		this.noResultsHeading = page.getByRole('heading', { name: 'no results' });
		this.copyLinkButton = page.getByRole('button', { name: 'copy link' });
		this.copySuccessFeedback = page.getByText('copied to clipboard');
	}

	/**
	 * Navigate to the results page with optional search params.
	 */
	async goto(searchParams?: URLSearchParams) {
		const path = '/results';
		const url =
			searchParams !== undefined && searchParams.size > 0
				? `${path}?${searchParams.toString()}`
				: path;
		await this.appPage.goto(url);
	}

	/**
	 * Click the button to copy a link to the current page.
	 */
	async copyLink() {
		await this.copyLinkButton.click();
	}
}

/**
 * Playwright test with a {@link ResultsPage} fixture.
 */
export const resultsPageTest = appTest.extend<{
	/** A {@link ResultsPage} instance, created for each test. */
	resultsPage: ResultsPage;
}>({
	resultsPage: async ({ page, appPage }, use) => {
		await use(new ResultsPage(page, appPage));
	}
});
