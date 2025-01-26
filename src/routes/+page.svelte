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
	@reference '$src/app.css';

	.hero {
		position: relative;
		display: flex;
		height: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: --spacing(12) --spacing(2);

		@variant before {
			position: absolute;
			inset: 0;
			z-index: -10;
			background-image: url('/aspect-wheel-bg.svg');
			background-size: cover;
			background-position: center;
			opacity: 75%;
		}

		.hero-card {
			max-width: var(--container-sm);
			border-radius: var(--radius-2xl);
			background-color: var(--color-neutral-50);
			padding: --spacing(6) --spacing(3.5);
			text-align: center;
			font-stretch: semi-expanded;
			@apply text-xl;

			@variant sm {
				max-width: var(--container-lg);
				@apply text-2xl;
			}
		}
	}
</style>
