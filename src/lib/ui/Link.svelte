<script lang="ts">
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	/** The link's href. */
	export let href: string;
	/** The link's target. */
	export let target: HTMLAttributeAnchorTarget | null | undefined = undefined;
</script>

<a {href} {target} class="cursor-pointer text-blue-800 underline"><slot /></a>
