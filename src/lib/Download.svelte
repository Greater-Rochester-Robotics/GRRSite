<script lang="ts">
	let { label, url }: { label: string; url: string } = $props();
</script>

<a style="font-weight: 700; width: fit-content;" href={url} download>
	{label}
	<svg
		viewBox="0 0 24 24"
		style="fill: none; stroke: currentColor; stoke-linecap: round; stroke-linejoin: round; stroke-width: 2;"
	>
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<polyline points="7 10 12 15 17 10" />
		<line x1="12" x2="12" y1="15" y2="3" />
	</svg>
</a>

<style>
	a > svg {
		height: 1em;
		margin-left: 0.2em;
		margin-bottom: 0.25em;
		display: inline;
		vertical-align: middle;
	}
</style>
