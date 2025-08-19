<script lang="ts">
	import { page } from '$app/state';
	import Link from '$lib/Link.svelte';
	import { robots } from '$lib/data/robots';
	import { error } from '@sveltejs/kit';

	const robot = robots.find((robot) => robot.year === Number(page.url.pathname.split(`/`).at(-1)));
	if (!robot) error(404, `Robot Not Found`);
</script>

<svelte:head>
	<link rel="preload" href="/fonts/Roboto-Bold.woff2" as="font" type="font/woff2" />

	<style>
		@font-face {
			font-family: Roboto-Bold;
			font-style: normal;
			font-weight: 700;
			font-display: swap;
			src: url('/fonts/Roboto-Bold.woff2') format('woff2');
		}
	</style>
</svelte:head>

<main class="article">
	<div id="header">
		<a href="/robots">Back</a>
		<h1 style="margin-top: 1rem;">{robot.name}</h1>
		<p id="year">{robot.year} &ndash; {robot.gameInfo.name}</p>
	</div>

	<div id="focus-container">
		<div id="events">
			<div id="event-text">
				<i>Events Attended</i>
				<div id="events-list">
					{#each robot.events as event}
						<div>
							<h3 class="event-name">{event.name}</h3>
							{#if event.awards.length}
								<div class="awards-container">
									{#each event.awards as award}
										<p>{award}</p>
									{/each}
								</div>
							{/if}
						</div>
					{/each}
					<span style="margin-top: 0.6rem;">
						<Link label="The Blue Alliance" url="https://www.thebluealliance.com/team/340/{robot.year}" />
					</span>
				</div>
			</div>

			<div id="event-banners">
				{#each robot.events as event}
					{#each event.banners as banner}
						<div class="banner">
							<div>
								<img src="/media/frc.svg" alt="FIRST® Robotics Competition Logo" />
							</div>
							<span></span>
							<p>{banner.toUpperCase()}</p>
							<p>{robot.year}</p>
							<p>{`${!event.division ? event.name : `${event.division} Division`}`.toUpperCase()}</p>
						</div>
					{/each}
				{/each}
			</div>
		</div>

		<div id="robot-photo">
			<img src="/media/robots/{robot.year}.webp" alt={robot.name} />
		</div>
	</div>

	<div id="the-challenge">
		<h2>The Challenge</h2>
		<p>{robot.gameInfo.description}</p>
		<Link label="Read More" url={robot.gameInfo.descriptionUrl} />
		{#if robot.gameInfo.animationEmbed}
			<iframe title="Game Animation" id="ytplayer" src="{robot.gameInfo.animationEmbed}?color=white&rel=0"></iframe>
		{/if}
	</div>

	{#if robot.teamPhoto}
		<div id="team-photo">
			<hr style="width: 95%; opacity: 0.2; margin: 1rem 0;" />
			<img src="/media/team/{robot.year}.webp" alt="{robot.year} Team Photo" />
			<i>{robot.teamPhoto}</i>
		</div>
	{/if}
</main>

<style>
	#header {
		gap: 0.2rem;

		#year {
			font-size: 1.2rem;
			font-weight: 300;
		}
	}

	#focus-container {
		flex-direction: row;
		justify-content: space-between;
		gap: 1.4rem;

		@media (width < 45rem) {
			flex-direction: column;
			align-items: start;

			> div {
				width: 100%;
			}

			#event-banners {
				justify-content: center;
			}
		}
	}

	#events {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 3rem;

		#event-text {
			align-self: flex-start;
		}

		#event-banners {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 1.4rem;
			padding-bottom: 1rem;

			.banner {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
				background-color: rgb(40, 65, 161);
				border-radius: 0.2rem;
				width: 8rem;
				aspect-ratio: 3 / 5;
				text-align: center;
				color: white;
				font-size: 0.8rem;
				font-weight: 700;
				box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.25);

				p {
					font-family: Roboto-Bold, Inter, sans-serif;
					padding: 0 0.6rem;
				}

				img {
					height: 3.6rem;
					border: none;
					box-shadow: none;
					border-radius: 0;
				}
			}
		}

		#events-list {
			margin-top: 0.8rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1.2rem;
		}

		.event-name {
			font-size: 1.4rem;
		}

		.awards-container {
			display: flex;
			padding-top: 1.2rem;
			padding-left: 1.6rem;
			gap: 0.5rem;
			flex-direction: column;
			opacity: 0.8;
			font-weight: 300;
		}
	}

	#robot-photo {
		width: 47%;

		img {
			width: 100%;
		}
	}

	#the-challenge {
		iframe {
			width: 100%;
			aspect-ratio: 16 / 9;
			align-self: center;
			border-radius: 0.6rem;
			border: 1px solid rgba(255, 255, 255, 0.1);
			box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.25);
		}
	}

	#team-photo {
		align-items: center;
		text-align: center;

		img {
			width: 100%;
			height: auto;
		}

		i {
			font-weight: 300;
			font-size: 0.85rem;
			opacity: 0.6;
		}
	}
</style>
