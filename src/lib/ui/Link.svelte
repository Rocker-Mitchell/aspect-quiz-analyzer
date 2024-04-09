<script lang="ts">
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	export let href: string;
	export let target: HTMLAttributeAnchorTarget | null | undefined = undefined;
</script>

<a {href} {target} class="cursor-pointer text-blue-800 underline"><slot /></a>
