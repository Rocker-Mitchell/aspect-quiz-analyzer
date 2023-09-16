<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="inline-block cursor-pointer rounded-xl bg-neutral-600 px-5 py-2 font-saira text-xl font-semibold uppercase leading-none text-neutral-50 shadow active:translate-y-px active:shadow-sm active:brightness-95"
	><slot /></a
>
