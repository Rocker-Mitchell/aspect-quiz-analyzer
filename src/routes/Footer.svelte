<script lang="ts" module>
	const siteLinks: readonly { readonly href: string; readonly label: string }[] = [
		{ href: '/', label: 'Home' },
		{ href: '/quiz', label: 'Take the Quiz' },
		{ href: '/how-it-works', label: 'How It Works' }
	];
</script>

<footer class="root-footer">
	<div class="container space-y-3 pt-6 pb-12">
		<nav>
			<ul class="site-links">
				{#each siteLinks as link}
					<li>
						<a href={link.href}>{link.label}</a>
					</li>
				{/each}

				<li>
					<a href="https://github.com/Rocker-Mitchell/aspect-quiz-analyzer" target="_blank">
						<span class="sr-only">Source code on GitHub</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							class="size-5"
						>
							<path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</nav>

		<hr class="border-neutral-800/40" />

		<p class="py-2 text-center text-balance">
			<a href="http://hs.hiveswap.com/ezodiac/index.php" target="_blank">The Extended Zodiac</a> by What
			Pumpkin Games Inc.
		</p>
	</div>
</footer>

<style lang="postcss">
	@reference '$src/app.css';

	.root-footer {
		background-color: var(--color-neutral-200);
		font-weight: var(--font-weight-medium);
		color: var(--color-neutral-800);
		@apply text-sm;
	}

	.site-links {
		display: flex;
		list-style-type: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;

		li {
			padding: --spacing(2);

			a {
				color: var(--color-neutral-700);
				text-decoration-line: none;

				@variant hover {
					color: var(--color-neutral-900);
					text-decoration-line: underline;
				}
			}
		}
	}
</style>
