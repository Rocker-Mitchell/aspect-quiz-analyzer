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
	.big-button {
		border-radius: theme(borderRadius.xl);
		border-width: theme(borderWidth[2]);
		border-color: theme(colors.yellow[900] / 35%);
		background-color: theme(colors.yellow[300]);
		padding: theme(spacing[2]) theme(spacing[5]);
		font-family: theme(fontFamily.saira);
		font-size: theme(fontSize.xl);
		font-weight: theme(fontWeight.semibold);
		text-transform: uppercase;
		line-height: theme(lineHeight.none);
		color: theme(colors.yellow[950]);
		@apply shadow;

		&[data-color='neutral'] {
			border-color: theme(colors.neutral[800] / 80%);
			background-color: theme(colors.neutral[600]);
			color: theme(colors.white);
		}

		&:active {
			transform: translate(0, theme(spacing.px));
			filter: brightness(theme(brightness[95]));
			@apply shadow-sm;
		}
	}
</style>
