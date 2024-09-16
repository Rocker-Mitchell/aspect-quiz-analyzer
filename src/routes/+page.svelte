<script lang="ts">
	import BigButton from '$lib/ui/BigButton.svelte';
</script>

<section class="hero">
	<div class="hero-card space-y-4 shadow-xl">
		<p>Detailed score analysis of the Extended Zodiac's Aspect quiz</p>

		<p>Take the quiz and see your results!</p>

		<div>
			<BigButton type="anchor" href="/quiz">Begin</BigButton>
		</div>
	</div>
</section>

<style lang="postcss">
	.hero {
		position: relative;
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: theme(spacing[12]) theme(spacing[2]);

		&::before {
			position: absolute;
			inset: 0;
			z-index: calc(-1 * theme(zIndex.10));
			background-image: url('/aspect-wheel-bg.svg');
			background-size: cover;
			background-position: center;
			opacity: theme(opacity[75]);
			@apply content-empty;
		}

		.hero-card {
			max-width: theme(maxWidth.sm);
			border-radius: theme(borderRadius.2xl);
			background-color: theme(colors.neutral[50]);
			padding: theme(spacing[6]) theme(spacing[3.5]);
			text-align: center;
			font-stretch: theme(fontStretch.semi-expanded);
			@apply text-xl;

			@media screen(sm) {
				max-width: theme(maxWidth.lg);
				@apply text-2xl;
			}
		}
	}
</style>
