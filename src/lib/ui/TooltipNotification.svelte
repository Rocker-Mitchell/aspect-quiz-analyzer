<script lang="ts">
	import type { ChildrenProp } from '$lib/props';

	let { children }: ChildrenProp = $props();
</script>

<div class="tooltip">
	{@render children()}
	<svg aria-hidden="true" width="12" height="6" viewBox="0 0 12 6" class="tooltip-arrow">
		<path d="m0 0 6 6 6-6H0Z" />
	</svg>
</div>

<style lang="postcss">
	@reference '$src/app.css';

	.tooltip {
		position: relative;
		width: max-content;
		border-radius: var(--radius-sm);
		background-color: var(--color-yellow-300);
		padding: --spacing(0.5) --spacing(1);
		font-weight: var(--font-weight-medium);
		color: var(--color-yellow-950);
		@apply text-sm shadow-lg;

		.tooltip-arrow {
			position: absolute;
			left: 50%;
			top: 100%;
			margin-top: -1px;
			height: --spacing(1.5);
			width: --spacing(3);
			translate: -50% 0;
			fill: var(--color-yellow-300);
		}
	}
</style>
