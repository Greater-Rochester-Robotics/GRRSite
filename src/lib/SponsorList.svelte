<script lang="ts">
	import { sponsors as sponsorData } from './data/sponsors';

	let { homepageFilter }: { homepageFilter?: boolean } = $props();
	const sponsors = homepageFilter ? sponsorData.filter((s) => s.homepage) : sponsorData;
</script>

<div id="sponsors-list">
	{#each sponsors as sponsor}
		{#snippet sponsorInner()}
			{#if sponsor.image}
				<img src="/sponsors/{sponsor.image}" alt={sponsor.name} />
			{:else}
				<div class="sponsor-text">
					<p>{sponsor.name}</p>
				</div>
			{/if}
		{/snippet}

		{#if sponsor.url}
			<a href={sponsor.url}>{@render sponsorInner()}</a>
		{:else}
			{@render sponsorInner()}
		{/if}
	{/each}
</div>

<style>
	#sponsors-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		gap: 1.2rem;
		opacity: 0.9;
		text-align: center;

		> a > *,
		> *:not(a) {
			height: 5rem;
			width: 15rem;
		}
	}

	.sponsor-text {
		display: flex;
		justify-content: center;
		align-items: center;

		> p {
			margin: 0 1rem;
			font-size: 1.5rem;
			font-weight: 600;
			opacity: 0.9;
			color: white;
		}
	}

	img {
		box-shadow: none;
		border-radius: 0;
		border: none;
	}
</style>
