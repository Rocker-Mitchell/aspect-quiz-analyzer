<script lang="ts">
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	export let href: string;
	export let target: HTMLAttributeAnchorTarget | null | undefined = undefined;
	export let inlineBlock = false;

	$: appendClass = [inlineBlock && 'inline-block'].filter((v): v is string => v !== false).join('');
</script>

<a {href} {target} class="cursor-pointer text-blue-800 underline {appendClass}"><slot /></a>
