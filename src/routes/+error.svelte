<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/ui/Link.svelte';
	import ProseHeading from '$lib/ui/ProseHeading.svelte';
	import SpacedContainerSection from '$lib/ui/SpacedContainerSection.svelte';
</script>

<SpacedContainerSection>
	<ProseHeading>{$page.status} {$page.error?.message}</ProseHeading>

	<p class="text-center">
		Something went wrong. Check the URL or go <Link href="/">home</Link>.
	</p>
</SpacedContainerSection>
