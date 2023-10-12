import { browser } from '$app/environment';

/**
 * Format a provided key to use as a session key.
 * @param key The provided key.
 * @returns A formatted session key.
 */
function sessionKey(key: string): string {
	return 'aqa:' + key;
}

/**
 * Store a value in session storage.
 * @param key The key to store to.
 * @param value The value to store.
 */
export function sessionStore(key: string, value: string): void {
	if (browser) {
		window.sessionStorage.setItem(sessionKey(key), value);
	}
}

/**
 * Fetch a value from session storage.
 * @param key The key to fetch.
 * @returns The value stored, or null if the key does not exist.
 */
export function sessionGet(key: string): string | null {
	return browser ? window.sessionStorage.getItem(sessionKey(key)) : null;
}

/**
 * Clear an entry in session storage.
 * @param key The key to clear.
 */
export function sessionClear(key: string): void {
	if (browser) {
		window.sessionStorage.removeItem(sessionKey(key));
	}
}
