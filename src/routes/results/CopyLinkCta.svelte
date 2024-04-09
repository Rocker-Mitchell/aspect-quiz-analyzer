<script lang="ts">
	import { fade } from 'svelte/transition';
	import SmallButton from '$lib/ui/SmallButton.svelte';
	import TooltipNotification from '$lib/ui/TooltipNotification.svelte';

	export let href: string;

	let feedbackMessage = '';

	function copyLink() {
		navigator.clipboard
			.writeText(href)
			.then(() => {
				feedbackMessage = 'Copied to clipboard';
			})
			.catch((reason) => {
				console.error('failed to copy', reason);
				feedbackMessage = 'Failed to copy';
			})
			.finally(() => {
				return new Promise<void>((resolve) => {
					setTimeout(() => {
						feedbackMessage = '';
						resolve();
					}, 3000);
				});
			});
	}
</script>

<div class="relative text-center">
	<SmallButton on:click={copyLink}>
		<svg
			slot="icon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			class="size-5"
		>
			<path
				d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
			/>
			<path
				d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
			/>
		</svg>
		Copy Link
	</SmallButton>

	{#if feedbackMessage.length > 0}
		<div
			transition:fade={{ duration: 180 }}
			class="absolute bottom-full left-1/2 z-20 w-max -translate-x-1/2 pb-2"
		>
			<TooltipNotification>{feedbackMessage}</TooltipNotification>
		</div>
	{/if}
</div>
