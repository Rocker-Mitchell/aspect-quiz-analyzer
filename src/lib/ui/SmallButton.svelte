<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ChildrenProp } from '$lib/props';
	import type { SharedButtonProps } from './shared-button-props';

	let {
		icon,
		children,
		...restProps
	}: {
		/** A snippet for additionally rendering an icon in the button. */
		icon?: Snippet;
	} & SharedButtonProps &
		ChildrenProp = $props();
</script>

{#snippet inner()}
	{#if icon}
		{@render icon()}
	{/if}
	<span>{@render children()}</span>
{/snippet}

{#if restProps.type === 'anchor'}
	<a href={restProps.href} class="button inline-cluster active:brightness-95">
		{@render inner()}
	</a>
{:else}
	<button
		type={restProps.type}
		class="inline-cluster active:brightness-95"
		onclick={restProps.onclick}
	>
		{@render inner()}
	</button>
{/if}
