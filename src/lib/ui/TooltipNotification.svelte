<div class="tooltip">
	<slot />
	<svg aria-hidden="true" width="12" height="6" viewBox="0 0 12 6" class="tooltip-arrow">
		<path d="m0 0 6 6 6-6H0Z" />
	</svg>
</div>

<style lang="postcss">
	.tooltip {
		position: relative;
		width: max-content;
		border-radius: theme(borderRadius.DEFAULT);
		background-color: theme(colors.yellow[300]);
		padding: theme(spacing[0.5]) theme(spacing[1]);
		font-weight: theme(fontWeight.medium);
		color: theme(colors.yellow[950]);
		@apply text-sm shadow-lg;

		.tooltip-arrow {
			position: absolute;
			left: 50%;
			top: 100%;
			margin-top: -1px;
			height: theme(spacing[1.5]);
			width: theme(spacing[3]);
			transform: translate(-50%, 0);
			fill: theme(colors.yellow[300]);
		}
	}
</style>
