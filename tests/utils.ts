import { test, type Page } from '@playwright/test';

/**
 * AppPage provides {@link Page} navigation methods that add waits for app code starting.
 */
export class AppPage {
	private readonly page: Page;
	private readonly javaScriptEnabled: boolean;

	constructor(page: Page, javaScriptEnabled: boolean) {
		this.page = page;
		this.javaScriptEnabled = javaScriptEnabled;
	}

	/**
	 * Get a Promise to wait for the app code starting on the page.
	 */
	async waitForAppStart() {
		if (this.javaScriptEnabled) {
			// eslint-disable-next-line playwright/no-wait-for-selector
			await this.page.waitForSelector('body[data-svelte-started=true]', { timeout: 5000 });
		}
	}

	/**
	 * Navigate to page and wait for app code starting.
	 * @see {@link Page.goto}
	 */
	goto: Page['goto'] = async (url, options) => {
		const result = await this.page.goto(url, options);
		await this.waitForAppStart();
		return result;
	};

	/**
	 * Navigate back in page history and wait for app code starting.
	 * @see {@link Page.goBack}
	 */
	goBack: Page['goBack'] = async (options) => {
		const result = await this.page.goBack(options);
		await this.waitForAppStart();
		return result;
	};

	/**
	 * Reload the current page and wait for app code starting.
	 * @see {@link Page.reload}
	 */
	reload: Page['reload'] = async (options) => {
		const result = await this.page.reload(options);
		await this.waitForAppStart();
		return result;
	};
}

/**
 * Playwright test with fixture for app page navigation.
 */
export const appTest = test.extend<{
	/** A fixture to provide page navigation methods that wait for the app code to have started. */
	appPage: AppPage;
}>({
	appPage: async ({ page, javaScriptEnabled }, use) => {
		await use(new AppPage(page, javaScriptEnabled));
	}
});

/**
 * Helper to determine active OS is Mac during testing.
 */
export function isMac() {
	return process.platform === 'darwin';
}
