<script lang="ts">
	const headerLinks: { href: string; label: string }[] = [
		{ href: '/', label: 'Home' },
		{ href: '/quiz', label: 'Take the Quiz' },
		{ href: '/how-it-works', label: 'How It Works' }
	];
</script>

<header class="bg-gradient-to-b from-neutral-100 to-neutral-200">
	<nav class="container mx-auto px-2 py-2">
		<ul class="flex flex-wrap items-center justify-center gap-1">
			{#each headerLinks as link}
				<li class="p-1 text-base leading-5 font-stretch-semi-expanded">
					<a
						href={link.href}
						class="cursor-pointer font-medium text-neutral-800 decoration-neutral-800/70 underline-offset-4 hover:underline"
						>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
