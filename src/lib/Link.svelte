<script lang="ts">
	let { label, url }: { label: string; url: string } = $props();
</script>

<a href={url}>
	{label}
	<svg
		viewBox="0 0 24 24"
		style="stroke: currentcolor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;"
	>
		<path d="M8 16L16 8M16 8H10M16 8V14" />
	</svg>
</a>

<style>
	a {
		width: fit-content;
		font-weight: 700;
	}

	a > svg {
		height: 1.2rem;
		display: inline;
		vertical-align: middle;
	}
</style>
