<script lang="ts">
	import Link from '$lib/ui/Link.svelte';
</script>

<footer class="bg-neutral-200">
	<div class="container mx-auto space-y-3 px-2 py-9">
		<p class="text-center text-sm font-medium text-neutral-800">
			Source on <Link href="https://github.com/Rocker-Mitchell/aspect-quiz-analyzer" target="_blank"
				>GitHub</Link
			>
		</p>

		<p class="text-center text-sm font-medium text-neutral-800">
			<!-- use inline blocks to have line breaks between spans -->
			<Link href="http://hs.hiveswap.com/ezodiac/index.php" target="_blank" inlineBlock
				>The Extended Zodiac</Link
			>
			<span class="inline-block">owned by</span>
			<span class="inline-block">What Pumpkin Games Inc.</span>
		</p>
	</div>
</footer>
