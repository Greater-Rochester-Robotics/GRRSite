<script lang="ts">
	import { sponsors, type Sponsor } from './data/sponsors';
	import Link from './Link.svelte';

	let { homepage }: { homepage?: boolean } = $props();

	const priority = (s: Sponsor) => (s.description ? 0 : s.homepage ? 1 : 2);
	const sections = !homepage
		? new Array(3).fill(null).map((_, i) => sponsors.filter((s) => priority(s) === i))
		: [sponsors.filter((s) => s.homepage)];
</script>

<div id="container">
	{#each sections as section, i}
		<div class="section">
			{#each section as sponsor}
				{@const descriptive = sponsor.description && !homepage}
				<div class="{descriptive ? `descriptive-` : sponsor.homepage ? `homepage-` : ``}sponsor">
					{#snippet sponsorInner()}
						<div class="logo">
							{#if sponsor.image}
								<img src="/sponsors/{sponsor.image}" alt={sponsor.name} />
							{:else}
								<p>{sponsor.name}</p>
							{/if}
						</div>
					{/snippet}

					{#if sponsor.url}
						<a href={sponsor.url}>{@render sponsorInner()}</a>
					{:else}
						{@render sponsorInner()}
					{/if}

					{#if descriptive}
						{#each sponsor.description! as paragraph}
							<p class="description">{paragraph}</p>
						{/each}
						{#if sponsor.url}
							<div style="margin-top: 0.4rem;">
								<Link label="Learn More" url={sponsor.url} />
							</div>
						{/if}
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	#container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4rem;
	}

	.section {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
		gap: 2rem;
		opacity: 0.9;
		text-align: center;
	}

	.sponsor {
		width: 12rem;
		max-width: 100%;
		aspect-ratio: 3 / 1;
		font-size: 1.2rem;

		@media (width < 30rem) {
			width: 8.5rem;
			font-size: 0.85rem;
		}
	}

	.homepage-sponsor {
		width: 20rem;
		max-width: 100%;
		aspect-ratio: 3 / 1;
		font-size: 1.8rem;
	}

	.descriptive-sponsor {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		.logo {
			max-width: 100%;
			width: 20rem;
		}

		.description {
			width: 38rem;
			max-width: 100%;
			text-align: left;
		}
	}

	.logo {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: none;
		border-radius: 0;
		border: none;

		> img {
			height: 100%;
			width: 100%;
		}

		> p {
			margin: 0 1rem;
			font-weight: 600;
			opacity: 0.9;
			color: white;
		}
	}
</style>
