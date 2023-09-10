<script lang="ts">
	import type { HeaderLinks } from './header-links';

	export let links: HeaderLinks;
</script>

<header class="bg-neutral-200">
	<div class="container mx-auto flex items-center gap-4 px-2 py-4">
		<h1 class="p-0.5 font-saira text-2xl font-bold leading-7 font-stretch-semi-expanded">
			<a href="/" class="cursor-pointer">AQA</a>
		</h1>

		<nav class="grow">
			<ul class="flex flex-wrap items-center justify-start gap-2">
				{#each links as link}
					<li class="p-1 text-base leading-5 font-stretch-semi-expanded">
						<a
							href="/{link.slug}"
							class="cursor-pointer decoration-neutral-400 underline-offset-4 hover:underline"
							>{link.label}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
