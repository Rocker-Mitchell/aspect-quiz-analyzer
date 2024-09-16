<script lang="ts">
	/** The type of button. */
	export let type: 'anchor' | 'button' | 'submit' | 'reset' | null | undefined = undefined;
	/** The href to use when the type is `"anchor"`. */
	export let href: string | null | undefined = undefined;
</script>

{#if type === 'anchor'}
	<a {href} class="button inline-cluster active:brightness-95">
		<slot name="icon" />
		<span>
			<slot />
		</span>
	</a>
{:else}
	<button {type} class="inline-cluster active:brightness-95" on:click>
		<slot name="icon" />
		<span>
			<slot />
		</span>
	</button>
{/if}
