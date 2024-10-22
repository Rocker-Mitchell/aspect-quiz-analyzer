<!--
@component
A semantic list generator.

The appropriate 'ul'/'ol' element is used based on the marker type.

The given items will be iterated and passed to the `listItem` snippet (item,
then its index in `items`). The generator ensures each item is wrapped in a
'li' element.

Example:
	```
	<ListGenerator
		items={[
			'some',
			'thing',
			2
		]}
	>
		{#snippet listItem(item, index)}
			{index}: {item}
		{/snippet}
	</ListGenerator>
	```
-->

<script lang="ts" generics="T">
	import type { Snippet } from 'svelte';

	let {
		type = 'disc',
		items,
		listItem
	}: {
		/** The type of marker used in the list. Defaults to 'disc'. */
		type?: 'disc' | 'decimal' | 'alpha';
		/**
		 * The items of the list.
		 */
		items: ReadonlyArray<T>;
		/**
		 * The snippet to render as each list item's content.
		 *
		 * The snippet is passed the item and its index in `items` as parameters.
		 */
		listItem: Snippet<[T, number]>;
	} = $props();

	let isOrdered = $derived(type !== 'disc');
</script>

<svelte:element
	this={isOrdered ? 'ol' : 'ul'}
	class="space-y-1"
	class:list-alpha={type === 'alpha'}
>
	{#each items as item, index}
		<li>{@render listItem(item, index)}</li>
	{/each}
</svelte:element>
