<script lang="ts">
	import type { ChildrenProp } from '$lib/props';

	let { children }: ChildrenProp = $props();
</script>

<section class="container mt-4 mb-6 space-y-6">
	{@render children()}
</section>
