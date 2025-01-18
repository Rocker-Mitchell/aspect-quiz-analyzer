<script lang="ts">
	import type { ChildrenProp } from '$lib/props';
	import type { SvelteHTMLElements } from 'svelte/elements';

	let {
		size = 'base',
		viewBox = '0 0 300 299',
		children
	}: {
		/** The size of the icon. Defaults to base size. */
		size?: 'base' | 'lg';
		/** An override for the SVG view box size. Defaults to 300 by 299. */
		viewBox?: SvelteHTMLElements['svg']['viewBox'];
	} & ChildrenProp = $props();
</script>

<svg {viewBox} class={['inline-block', size === 'lg' ? 'size-12' : 'size-8']}>
	{@render children()}
</svg>
