import type { OnclickProp } from '$lib/props';
import type { SvelteHTMLElements } from 'svelte/elements';

/**
 * Shared typing for UI button props.
 *
 * Prefer to not destructure each property to leverage type guarding around the
 * `type`.
 *
 * Example:
 * ```html
 * <script lang="ts">
 * let { foo, ...restProps }: { foo: string } & SharedButtonProps = $props();
 * </script>
 * {#if restProps.type == 'anchor'}
 *   <!-- can expect href prop to be defined -->
 *   <a href={restProps.href}>...</a>
 * {:else}
 *   <!-- can expect onclick prop to be optionally defined -->
 *   <button onclick={restProps.onclick}>...</button>
 * {/if}
 * ```
 */
export type SharedButtonProps =
	| {
			/**
			 * The type of button semantically rendered.
			 */
			type: 'anchor';
			/** The href to use on "anchor" buttons. */
			href: Exclude<SvelteHTMLElements['a']['href'], null | undefined>;
	  }
	| ({
			/**
			 * The type of button semantically rendered.
			 */
			type?: SvelteHTMLElements['button']['type'];
	  } & OnclickProp<HTMLButtonElement>);
