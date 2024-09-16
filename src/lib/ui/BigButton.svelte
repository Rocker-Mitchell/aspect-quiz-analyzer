<script lang="ts">
	/** The type of button. */
	export let type: 'anchor' | 'button' | 'submit' | 'reset' | null | undefined = undefined;
	/** The color variation of button. Defaults to 'yellow'. */
	export let color: 'yellow' | 'neutral' = 'yellow';
	/** The href to use when the type is `"anchor"`. */
	export let href: string | null | undefined = undefined;

	$: activeColor = color !== 'yellow' ? color : undefined;
</script>

{#if type === 'anchor'}
	<a {href} data-color={activeColor} class="button big-button"><slot /></a>
{:else}
	<button {type} data-color={activeColor} class="big-button" on:click><slot /></button>
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
