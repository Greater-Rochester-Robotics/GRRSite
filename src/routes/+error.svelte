<script lang="ts">
	import { page } from '$app/state';
</script>

<main>
	<p>Oh Noes!!</p>
	<h2>{page.status} &ndash; {page.error?.message ?? `An error occurred loading this page`}</h2>
	<img src="/badnewsbears.webp" alt="Bad news bears" />
</main>

<style>
	main {
		margin-top: 6rem;
		text-align: center;
		flex-grow: 1;
		gap: 1rem;
		font-size: 1.4rem;
	}

	img {
		width: 16rem;
		margin: 1rem auto;
	}
</style>
