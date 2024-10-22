<script lang="ts">
	import type { ChildrenProp } from '$lib/props';

	let { children }: ChildrenProp = $props();
</script>

<section class="container mx-auto mb-8 mt-6 space-y-6 px-2">
	{@render children()}
</section>
