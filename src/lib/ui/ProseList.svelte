<script lang="ts" generics="T">
	export let type: 'disc' | 'decimal' | 'alpha' = 'disc';
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
