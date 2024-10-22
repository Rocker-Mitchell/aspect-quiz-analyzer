import type { Snippet } from 'svelte';
import type { DOMAttributes, HTMLAttributes } from 'svelte/elements';

/**
 * An optional component prop interface for a native on-click event handler.
 *
 * Usage:
 * ```html
 * <script lang="ts">
 * // type the generic for what HTML element will be clicked
 * let { foo, onclick }: { foo: string } & OnclickProp<HTMLButtonElement> = $props();
 * </script>
 * <button {onclick}>Click me!</button>
 * ```
 */
export type OnclickProp<T extends EventTarget> = {
	/** A native on-click event handler to bind to a clickable element within the component. */
	onclick?: DOMAttributes<T>['onclick'];
};

/**
 * An optional component prop interface for passing CSS classes.
 *
 * Usage:
 * ```html
 * <script lang="ts">
 * // destructure to a name that's not `class` to not conflict with the JS keyword
 * let { foo, class: classProp }: { foo: string } & ClassProp = $props();
 * </script>
 * <div class="baz {classProp}">...</div>
 * ```
 */
export type ClassProp = {
	/** Pass-through CSS classes to apply within the component. */
	class?: HTMLAttributes<HTMLElement>['class'];
};

/**
 * The default component prop interface for the snippet that captures any
 * passed template content not in an explicit snippet declaration.
 *
 * Usage:
 * ```html
 * <script lang="ts">
 * let { foo, children }: { foo: string } & ChildrenProp = $props();
 * </script>
 * {@render children()}
 * ```
 */
export type ChildrenProp = {
	/** A snippet of template content passed outside a snippet declaration. */
	children: Snippet;
};
