<script lang="ts">
	import Link from '$lib/Link.svelte';
	import { ATTENDED_CHAMPS, robots } from '$lib/data/robots';
</script>

<main style="gap: 0.4rem;">
	<h1 style="text-align: center;">Our Robots</h1>

	<div id="career">
		<p>{robots.length} Seasons</p>
		<p>{robots.reduce((p, c) => p + c.events.reduce((p, c) => p + c.awards.length, 0), 0)} Awards</p>
		<p>{robots.reduce((p, c) => p + c.events.reduce((p, c) => p + c.banners.length, 0), 0)} Blue Banners</p>
		<p>{robots.filter((r) => r.headline === ATTENDED_CHAMPS).length} Championship Appearances</p>
	</div>

	<div id="robots">
		{#each robots as robot}
			{@const awards = robot.events.reduce((p, c) => p + c.awards.length, 0)}
			{@const banners = robot.events.reduce((p, c) => p + c.banners.length, 0)}

			<div class="robot">
				<img src="/media/robots/{robot.year}.webp" alt={robot.name} />

				<div class="robot-description">
					<div>
						<p style="font-weight: 300;">{robot.year}</p>
						<h2>{robot.name}</h2>

						{#if robot.headline}
							<p style="margin-top: 0.15rem; opacity: 0.7;">{robot.headline}</p>
						{/if}
					</div>

					<div>
						{#if awards}
							<b>{awards} Award{awards > 1 ? `s` : ``}</b>
						{/if}
						{#if banners}
							<i style="font-size: 0.7rem;">{banners > 1 ? `${banners} Banners` : `+ Banner`}</i>
						{/if}
					</div>

					<Link label="Read More" url="/robots/{robot.year}" />
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
	#career {
		flex-direction: row;
		gap: 0.5rem 1rem;
		padding: 1rem;
		font-style: italic;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		text-align: center;

		p {
			opacity: 0.6;
			font-weight: 500;
		}
	}

	#robots {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 2rem;
		gap: 4rem;

		.robot {
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			gap: 2rem;

			.robot-description {
				width: 8.5rem;
				height: 12rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 0.9rem;

				> div {
					display: flex;
					flex-direction: column;
					gap: 0.2rem;
				}

				/* @media (width < 40rem) {
					text-align: right;
					align-items: end;
				} */
			}

			img {
				width: 8rem;
				height: 12rem;
				border-radius: 0.4rem;
				border: 1px solid rgba(255, 255, 255, 0.1);
				object-fit: cover;
				object-position: center;
			}
		}
	}
</style>
