<script lang="ts">
	/** The type of button. */
	export let type: 'anchor' | 'button' | 'submit' | 'reset' | null | undefined = undefined;
	/** The color variation of button. */
	export let variant: 'yellow' | 'neutral' = 'yellow';
	/** The href to use when the type is `"anchor"`. */
	export let href: string | null | undefined = undefined;
</script>

{#if type === 'anchor'}
	<a
		{href}
		data-variant={variant}
		class="inline-block cursor-pointer rounded-xl border-2 border-yellow-900/35 bg-yellow-300 px-5 py-2 font-saira text-xl font-semibold uppercase leading-none text-yellow-950 no-underline shadow active:translate-y-px active:shadow-sm active:brightness-95 data-[variant=neutral]:border-neutral-800/80 data-[variant=neutral]:bg-neutral-600 data-[variant=neutral]:text-white"
		><slot /></a
	>
{:else}
	<button
		{type}
		on:click
		data-variant={variant}
		class="cursor-pointer rounded-xl border-2 border-yellow-900/35 bg-yellow-300 px-5 py-2 font-saira text-xl font-semibold uppercase leading-none text-yellow-950 no-underline shadow active:translate-y-px active:shadow-sm active:brightness-95 data-[variant=neutral]:border-neutral-800/80 data-[variant=neutral]:bg-neutral-600 data-[variant=neutral]:text-white"
		><slot /></button
	>
{/if}
