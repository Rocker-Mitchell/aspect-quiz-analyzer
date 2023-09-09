<script lang="ts">
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	export let href: string;
	export let target: HTMLAttributeAnchorTarget | null | undefined = undefined;
	let addClass: string | undefined = undefined;
	export { addClass as class };

	$: appendClass = addClass || '';
</script>

<a {href} {target} class="cursor-pointer text-blue-600 underline {appendClass}"><slot /></a>
