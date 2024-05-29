<script lang="ts" generics="T">
	/** The type of marker used in the list. */
	export let type: 'disc' | 'decimal' | 'alpha' = 'disc';
	/**
	 * The items of the list.
	 *
	 * Items are looped through and provided via slot props: `item` and `index`.
	 * Use the `let:` directive and define child content to control how an item is rendered.
	 */
	export let items: Array<T> = [];

	$: isOrdered = type !== 'disc';
</script>

<svelte:element
	this={isOrdered ? 'ol' : 'ul'}
	data-type={type}
	class="mx-auto w-fit max-w-prose list-inside space-y-1 data-[type=alpha]:list-alpha data-[type=decimal]:list-decimal data-[type=disc]:list-disc"
>
	{#each items as item, index}
		<li class="marker:italic"><slot {item} {index} /></li>
	{/each}
</svelte:element>
