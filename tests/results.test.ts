/**
 * @file Integration tests for the results page.
 */
import { expect } from '@playwright/test';
import { Aspect } from '$lib/aspect/aspect';
import { encodeScoresParam } from '$lib/search-params/scores-param';
import { testClipboard } from './clipboard';
import { resultsPageTest as test } from './results-page';

test.describe('Showing results', () => {
	test('should render a table of results', async ({ resultsPage }) => {
		const scoresParam = encodeScoresParam(
			new Map([
				[Aspect.Doom, 12],
				[Aspect.Hope, 10],
				[Aspect.Time, 8]
			])
		);
		await resultsPage.goto(scoresParam);

		const resultsTableRow = resultsPage.resultsTable.locator('tbody').locator('tr');
		await expect(resultsTableRow).toHaveCount(12);

		await expect(resultsTableRow.nth(0).locator('td')).toHaveText(['Doom', '12']);
		await expect(resultsTableRow.nth(1).locator('td')).toHaveText(['Hope', '10']);
		await expect(resultsTableRow.nth(2).locator('td')).toHaveText(['Time', '8']);

		// other result rows should track value of 0
		for (let index = 3; index < 12; index++) {
			const row = resultsTableRow.nth(index);
			await expect(row.locator('td').nth(1)).toHaveText('0');
		}
	});

	test('should render a polar area visualization with result data labels', async ({
		resultsPage
	}) => {
		const scoresParam = encodeScoresParam(
			new Map([
				[Aspect.Doom, 12],
				[Aspect.Hope, 10],
				[Aspect.Time, 8]
			])
		);
		await resultsPage.goto(scoresParam);

		await expect(resultsPage.resultsPolarArea.getByText('Doom 12')).toBeVisible();
		await expect(resultsPage.resultsPolarArea.getByText('Hope 10')).toBeVisible();
		await expect(resultsPage.resultsPolarArea.getByText('Time 8')).toBeVisible();

		// other aspect labels should track value of 0
		for (const aspect of [
			'Space',
			'Heart',
			'Mind',
			'Rage',
			'Light',
			'Void',
			'Breath',
			'Blood',
			'Life'
		]) {
			await expect(resultsPage.resultsPolarArea.getByText(`${aspect} 0`)).toBeVisible();
		}
	});
});

test.describe('No results', () => {
	const cases: [string, URLSearchParams | undefined][] = [
		['no params', undefined],
		['unrelated param', new URLSearchParams({ dummy: 'dummy' })],
		['empty param value', new URLSearchParams('scores')],
		['bad param value', new URLSearchParams({ scores: 'bad' })],
		['incomplete encoding', new URLSearchParams({ scores: '1,2,3' })],
		[
			'overpopulated encoding',
			new URLSearchParams({ scores: '20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1' })
		]
	];
	for (const [description, searchParams] of cases) {
		test(`should show no results on bad search params: ${description}`, async ({ resultsPage }) => {
			await resultsPage.goto(searchParams);
			await expect(resultsPage.noResultsHeading).toBeVisible();
		});
	}
});

test.describe('Copy link button', () => {
	test('should copy current page URL to clipboard', async ({
		browserName,
		context,
		page,
		resultsPage
	}) => {
		test.fixme(
			browserName === 'webkit',
			'Failing to get clipboard content set through `navigator.clipboard.writeText()` in Safari'
		);
		// BUG getting clipboard content fails on webkit
		// - getting successful feedback message from app, so seemingly no error running navigator.clipboard.writeText()
		// - paste keyboard shortcut works with copy keyboard shortcut & document.execCommand('copy'), but not
		//   navigator.clipboard.writeText()

		const scoresParam = encodeScoresParam(
			new Map([
				[Aspect.Doom, 12],
				[Aspect.Hope, 10],
				[Aspect.Time, 8]
			])
		);
		await resultsPage.goto(scoresParam);

		await resultsPage.copyLink();
		await expect(resultsPage.copySuccessFeedback).toBeVisible();
		await testClipboard(page.url(), context);
	});

	test.describe('with JavaScript disabled', () => {
		test.use({ javaScriptEnabled: false });

		test('should not show button', async ({ resultsPage }) => {
			const scoresParam = encodeScoresParam(
				new Map([
					[Aspect.Doom, 12],
					[Aspect.Hope, 10],
					[Aspect.Time, 8]
				])
			);
			await resultsPage.goto(scoresParam);

			await expect(resultsPage.copyLinkButton).toBeHidden();
		});
	});
});
