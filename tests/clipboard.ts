import { expect, type BrowserContext } from '@playwright/test';
import { isMac } from './utils';

/**
 * Test clipboard content matches the given value.
 *
 * A separate page will be created in the context for getting clipboard content.
 *
 * @param value The clipboard value to expect.
 * @param context The current browser context.
 */
export async function testClipboard(value: string | RegExp, context: BrowserContext) {
	const page = await context.newPage();
	await page.setContent('<textarea></textarea>');
	const textArea = page.locator('textarea');

	const modifier = isMac() ? 'Meta' : 'Control';
	await textArea.press(`${modifier}+V`);
	await expect(textArea).toHaveValue(value);
}
