<script lang="ts">
	let { text }: { text: string } = $props();
	const id = text
		.replace(/[\s_]+/g, `-`)
		.replace(/[^a-z0-9\-]/gi, ``)
		.toLowerCase();
</script>

<h2><a {id} href="#{id}">{text}</a></h2>

<style>
	h2 > a {
		color: inherit;
		scroll-margin-top: 3rem;
	}
</style>
