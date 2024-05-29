// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			/** A page title to use. */
			title?: string;
			/** A page description to use. */
			description?: string;
		}
		// interface Platform {}
	}
}

export {};
