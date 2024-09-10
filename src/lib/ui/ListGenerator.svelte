<!--
@component
A semantic list generator.

The appropriate 'ul'/'ol' element is used based on the marker type.

The given items will be iterated and provided back with their index through
default slot props: `item` and `index`. The parent must use child content to
template how items render, while the generator ensures each is wrapped in a
'li' element.

Example:
	```
	<ListGenerator
		items={[
			'some',
			'thing',
			2
		]}
		let:item
		let:index
	>
		{index}: {item}
	</ListGenerator>
	```
-->

<script lang="ts" generics="T">
	/** The type of marker used in the list. Defaults to 'disc'. */
	export let type: 'disc' | 'decimal' | 'alpha' = 'disc';
	/**
	 * The items of the list.
	 *
	 * Items are iterated through and provided back via default slot props:
	 * `item` and `index`. Define child content to template how each item is
	 * rendered.
	 */
	export let items: Array<T> = [];

	$: isOrdered = type !== 'disc';
</script>

<svelte:element this={isOrdered ? 'ol' : 'ul'} class:list-alpha={type === 'alpha'}>
	{#each items as item, index}
		<li><slot {item} {index} /></li>
	{/each}
</svelte:element>
