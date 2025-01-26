<header class="root-header">
	<div class="container">
		<h1 class="brand">
			<a href="/" class="cluster">
				<img src="logo.svg" alt="Logo" height="32" aria-hidden="true" class="inline-block h-8" />
				<span>Aspect Quiz Analyzer</span>
			</a>
		</h1>
	</div>
</header>

<style lang="postcss">
	@reference '$src/app.css';

	.root-header {
		color: var(--color-neutral-800);
		@apply bg-linear-to-b from-neutral-100 to-neutral-200;
	}

	h1.brand {
		font-family: var(--font-saira);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--tracking-tighter);
		font-stretch: expanded;

		a {
			--cluster-gap: --spacing(1.5);
			margin-inline: auto;
			width: fit-content;
			color: inherit;
			text-decoration-line: none;
		}
	}
</style>
