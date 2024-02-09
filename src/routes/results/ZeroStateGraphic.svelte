<script lang="ts">
	const canvasSize = 256;
	const radius = canvasSize / 2 - 3;
</script>

<svg viewBox="0 0 {canvasSize} {canvasSize}" style:max-width="{canvasSize}px" class="mx-auto">
	<circle cx="50%" cy="50%" r={radius} class="fill-blue-800"></circle>
	<text
		x="50%"
		y="50%"
		dominant-baseline="central"
		text-anchor="middle"
		font-size="220px"
		class="translate-x-[8px] fill-blue-50 font-saira font-semibold font-stretch-expanded">?</text
	>
</svg>
