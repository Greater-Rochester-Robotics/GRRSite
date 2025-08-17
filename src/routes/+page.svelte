<script>
	import Link from '$lib/Link.svelte';
	import { nextEvent } from '$lib/data/nextEvent';
	import { onMount } from 'svelte';

	let days = $state(0);
	let hours = $state(0);
	let minutes = $state(0);
	let seconds = $state(0);

	onMount(() => {
		const m = 1000 * 60;
		const h = m * 60;
		const d = h * 24;

		const update = () => {
			const diff = Math.max(0, nextEvent.date.getTime() - Date.now());
			days = Math.floor(diff / d);
			hours = Math.floor((diff % d) / h);
			minutes = Math.floor((diff % h) / m);
			seconds = Math.floor((diff % m) / 1000);
		};

		update();
		const interval = setInterval(update, 1000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<link rel="preload" href="/media/photos/flr2025-winners.webp" as="image" type="image/webp" fetchpriority="high" />
</svelte:head>

<main>
	<div id="title-image">
		<h1>Team 340 <span style="color: var(--accent);">G.R.R.</span></h1>
		<p>Greater Rochester Robotics is a high school robotics team based in Churchville, New York.</p>
		<div id="quick-links">
			<!-- TODO -->
			<a href="https://docs.google.com/forms/d/18lWIUZD4r8hx69ei_DRwcXel9XCzbMMCsA2wotxImcI/viewform">Join the team</a>
			<!-- <a href="/sponsors">Support the team</a> -->
		</div>
	</div>

	<div id="about-blob">
		<div>
			<h1>About Us</h1>
			<p>
				Team 340, G.R.R. (Greater Rochester Robotics) is a high school robotics team that competes annually in the
				FIRST® Robotics Competition. Every year, our students are challenged to design, build, and program a
				competitive industrial-sized robot capable of playing a field game that is released in January.
			</p>
			<p>
				Our program gives students hands-on experience working in areas such as mechanical engineering, manufacturing
				and fabrication, electronics, programming, and more, supported by adult mentors who work professionally in these
				fields.
			</p>

			<div style="display: flex; gap: 0.6rem; margin-top: 0.4rem;">
				<Link label="More about 340" url="/about" />
				<Link label="Our Robots" url="/robots" />
			</div>
		</div>

		<video autoplay muted loop playsinline preload="none" poster="/media/photos/mvr2025-pits-512.webp">
			<source src="/media/2025.mp4" type="video/mp4" />
			Your browser does not support video playback.
		</video>
	</div>

	<div id="next-event">
		<div id="countdown">
			<div>
				<h2>{days}</h2>
				<p>Day{days !== 1 ? `s` : ``}</p>
			</div>
			<div>
				<h2>{hours}</h2>
				<p>Hour{hours !== 1 ? `s` : ``}</p>
			</div>
			<div>
				<h2>{minutes}</h2>
				<p>Minute{minutes !== 1 ? `s` : ``}</p>
			</div>
			<div>
				<h2>{seconds}</h2>
				<p>Second{seconds !== 1 ? `s` : ``}</p>
			</div>
		</div>
		<h3 style="margin-top: 1rem;">To {nextEvent.name}</h3>
		{#if nextEvent.link}
			<Link label={nextEvent.link.label} url={nextEvent.link.url} />
		{/if}
	</div>

	<!-- <div id="sponsors">
		<div id="sponsors-text">
			<h1>Sponsors</h1>
			<p>
				Without the help of our sponsors, Team 340 wouldn't be able to build and compete as we do each year. With the
				resources they provide us, we are able to turn our dreams into a reality.
			</p>
		</div>

		<p><i>Placeholder - TODO get top sponsor logos</i></p>
	</div> -->
</main>

<style>
	/*
	 i am CSS pro
	 flexbox 4life
	 idiomatic CSS markup iz for noobs
	 and i would never ever ever write useful comments
	*/

	main {
		@media (width < 70rem) {
			margin-top: 0;
		}
	}

	#title-image {
		gap: 1.8rem;
		text-align: center;
		min-height: 26rem;
		padding: 2rem 0;
		max-width: 100vw;
		box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.25);
		background-image: url('/media/photos/flr2025-winners.webp');
		background-size: cover;
		background-position: center;

		@media (width >= 70rem) {
			border-radius: 0.6rem;
			border: 1px solid rgba(255, 255, 255, 0.1);
		}

		h1 {
			margin: 0 4%;
			font-weight: 900;
			font-style: italic;
			font-size: 3rem;
			color: rgb(255, 255, 255);
			mask-image: linear-gradient(black, rgba(0, 0, 0, 0.75));
		}

		p {
			margin: 0 25%;
			font-size: 1.25rem;
			font-weight: 700;

			@media (width < 40rem) {
				margin: 0 8%;
			}
		}
	}

	#quick-links {
		margin: 0 25%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;

		a {
			flex-grow: 1;
			padding: 0.75rem 1rem;
			cursor: pointer;
			border-radius: 0.5rem;
			color: inherit;
			text-decoration: none;
			font-weight: 700;
			border: 1px solid rgba(255, 255, 255, 0.15);
			box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
			background-color: rgba(48, 48, 50, 0.7);
			backdrop-filter: blur(10px);
			transition-duration: 0.2s;
		}

		a:hover {
			background-color: rgba(32, 32, 33, 0.7);
			box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
		}
	}

	#about-blob {
		margin: 0 8%;
		flex-direction: column;
		align-items: center;
		gap: inherit;

		@media (width > 60rem) {
			flex-direction: row;

			div {
				width: 80%;
			}
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1.2rem;
		}

		video {
			width: 100%;
			height: auto;
			overflow: hidden;
			pointer-events: none;
			border-radius: 0.4rem;
			border: 1px solid rgba(255, 255, 255, 0.1);
			box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.25);
		}
	}

	#next-event {
		margin: 0 15%;
		padding: 2rem 0;
		align-items: center;
		text-align: center;
		gap: 0.6rem;
		border-radius: 0.8rem;
		background-color: rgba(0, 0, 0, 0.15);

		@media (width < 50rem) {
			margin: 0;
			border-radius: 0;
			padding: 2.8rem 0;

			#countdown {
				justify-content: space-evenly !important;
				gap: 0.2rem !important;
			}
		}

		#countdown {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 3.5rem;

			> div {
				width: 4rem;
				display: flex;
				flex-direction: column;

				p {
					opacity: 0.7;
					font-size: 0.9rem;
				}
			}
		}
	}

	/* #sponsors {
		margin: 0 8%;
	}

	#sponsors-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.2rem;
		max-width: 40rem;
	} */
</style>
