<script lang="ts">
	export let type: 'anchor' | 'button' | 'submit' | 'reset' | null | undefined = undefined;
	export let href: string | null | undefined = undefined;
</script>

{#if type === 'anchor'}
	<a
		{href}
		class="inline-flex cursor-pointer items-center gap-1 rounded bg-neutral-600 px-1.5 py-1 text-sm text-neutral-50 active:brightness-95"
	>
		<slot name="icon" />
		<span>
			<slot />
		</span>
	</a>
{:else}
	<button
		{type}
		class="inline-flex cursor-pointer items-center gap-1 rounded bg-neutral-600 px-1.5 py-1 text-sm text-neutral-50 active:brightness-95"
		on:click
	>
		<slot name="icon" />
		<span>
			<slot />
		</span>
	</button>
{/if}
