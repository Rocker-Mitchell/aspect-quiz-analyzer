<script lang="ts">
	const headerLinks: { href: string; label: string }[] = [
		{ href: '/', label: 'Home' },
		{ href: '/quiz', label: 'Take the Quiz' }
	];
</script>

<header class="bg-neutral-200">
	<nav class="container mx-auto px-2 py-2">
		<ul class="flex flex-wrap items-center justify-center gap-1">
			{#each headerLinks as link}
				<li class="p-1 text-base leading-5 font-stretch-semi-expanded">
					<a
						href={link.href}
						class="cursor-pointer decoration-neutral-400 underline-offset-4 hover:underline"
						>{link.label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
