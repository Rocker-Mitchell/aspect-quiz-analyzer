<header class="root-header">
	<div class="container mx-auto p-2">
		<h1 class="brand">
			<a href="/">
				<img src="logo.svg" alt="Logo" height="32" aria-hidden="true" class="inline-block h-8" />
				<span>Aspect Quiz Analyzer</span>
			</a>
		</h1>
	</div>
</header>

<style lang="postcss">
	.root-header {
		background-image: linear-gradient(
			to bottom,
			theme(colors.neutral[100]),
			theme(colors.neutral[200])
		);
		color: theme(colors.neutral[800]);
	}

	h1.brand {
		font-family: theme(fontFamily.saira);
		font-weight: theme(fontWeight.bold);
		letter-spacing: theme(letterSpacing.tighter);
		font-stretch: theme(fontStretch.expanded);

		a {
			margin-left: auto;
			margin-right: auto;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: theme(spacing[1.5]);
			color: inherit;
			text-decoration-line: none;
		}
	}
</style>
