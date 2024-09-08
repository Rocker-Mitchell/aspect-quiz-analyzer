<script lang="ts">
	import { page } from '$app/stores';
	import SpacedContainerSection from '$lib/ui/SpacedContainerSection.svelte';
</script>

<SpacedContainerSection>
	<h1>{$page.status} {$page.error?.message}</h1>

	<p class="text-center">
		Something went wrong. Check the URL or go <a href="/">home</a>.
	</p>
</SpacedContainerSection>
