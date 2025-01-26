<script lang="ts">
	import type { ChildrenProp } from '$lib/props';
	import type { SharedButtonProps } from './shared-button-props';

	let {
		color = 'yellow',
		children,
		...restProps
	}: {
		/** The color variation of button. Defaults to 'yellow'. */
		color?: 'yellow' | 'neutral';
	} & SharedButtonProps &
		ChildrenProp = $props();

	let activeColor = $derived(color !== 'yellow' ? color : undefined);
</script>

{#if restProps.type === 'anchor'}
	<a href={restProps.href} data-color={activeColor} class="button big-button">
		{@render children()}
	</a>
{:else}
	<button
		type={restProps.type}
		data-color={activeColor}
		class="big-button"
		onclick={restProps.onclick}
	>
		{@render children()}
	</button>
{/if}

<style lang="postcss">
	@reference '$src/app.css';

	.big-button {
		border-radius: var(--radius-xl);
		border-width: 2px;
		border-color: --alpha(var(--color-yellow-900) / 35%);
		background-color: var(--color-yellow-300);
		padding: --spacing(2) --spacing(5);
		font-family: var(--font-saira);
		font-size: var(--text-xl);
		font-weight: var(--font-weight-semibold);
		text-transform: uppercase;
		line-height: 1;
		color: var(--color-yellow-950);
		@apply shadow-sm;

		&[data-color='neutral'] {
			border-color: --alpha(var(--color-neutral-800) / 80%);
			background-color: var(--color-neutral-600);
			color: var(--color-white);
		}

		@variant active {
			translate: 0 1px;
			filter: brightness(95%);
			@apply shadow-xs;
		}
	}
</style>
