<script lang="ts">
	import Socials from '$lib/Socials.svelte';

	let { children } = $props();

	const navItems = [
		{ label: `About`, url: `/about` },
		{ label: `Our Robots`, url: `/robots` },
		{ label: `Resources`, url: `/resources` },
		// { label: `Sponsors`, url: `/sponsors` },
		{ label: `Contact`, url: `/contact` }
	];

	let menuOpen = $state(false);
	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

{#snippet home(height: string)}
	<a href="/" onclick={() => (menuOpen = false)}>
		<img style="height: {height};" src="/media/logo.svg" alt="340 Logo" />
	</a>
{/snippet}

<div id="container">
	<div>
		<nav>
			{@render home('1.5rem')}
			<div id="navbar-items">
				{#each navItems as item}
					<a href={item.url}>{item.label}</a>
				{/each}
			</div>

			<button id="navbar-menu-open" style="display: none;" onclick={toggleMenu} aria-label="Menu">
				<svg height="1.5rem" viewBox="0 0 24 24"><path d="M4 6h16m-10 6h10M6 18h14" /></svg>
			</button>
			{#if menuOpen}
				<div id="navbar-menu">
					<div id="navbar-menu-header">
						{@render home('2.2rem')}
						<button id="navbar-menu-close" onclick={toggleMenu} aria-label="Close">
							<svg height="2rem" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
						</button>
					</div>
					{#each navItems as item}
						<a href={item.url} onclick={toggleMenu}>{item.label}</a>
					{/each}
				</div>
			{/if}
		</nav>
		{@render children()}
	</div>

	<footer>
		<p style="font-size: 0.8rem; opacity: 0.8;">© 2025 Team 340</p>
		<Socials />
	</footer>
</div>

<style>
	#container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 0;
	}

	nav {
		padding: 0 0.8rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.3);
		box-shadow: 0 0 14px rgba(0, 0, 0, 0.4);
		gap: 3rem;

		#navbar-items {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 3rem;
			transition-duration: 0.2s;
		}

		#navbar-menu {
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: center;
			gap: 0;
			top: 2vw;
			right: 2vw;
			background-color: rgba(36, 36, 38, 0.8);
			backdrop-filter: blur(30px);
			z-index: 1000;
			position: absolute;
			height: fit-content;
			width: calc(96vw - 3rem);
			animation: popIn 0.2s;
			animation-timing-function: ease-out;
			border-radius: 0.6rem;
			border: 1px solid rgba(255, 255, 255, 0.1);
			font-size: 1.4rem;
			padding: 1rem 1.5rem;
			transform-origin: top right;

			#navbar-menu-header {
				display: flex;
				justify-content: space-between;
				width: 100%;
			}
		}

		a,
		button {
			font-family: inherit;
			font-size: inherit;
			font-weight: 700;
			color: inherit;
			text-decoration: none;
			padding: 1.2rem;
			vertical-align: middle;
			transition-duration: 0.15s;
			background: none;
			border: none;
		}

		a:hover,
		button:hover {
			opacity: 0.6;
		}

		@media (width <= 60rem) {
			justify-content: space-between;

			#navbar-items {
				display: none;
			}

			#navbar-menu-open {
				display: block !important;
			}
		}

		svg {
			fill: none;
			stroke: currentcolor;
			stroke-linecap: round;
			stroke-linejoin: round;
			stroke-width: 2;
		}
	}

	footer {
		margin-bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		gap: 2rem;
		padding: 2rem;

		@media (width < 50rem) {
			flex-direction: column;
		}
	}

	:global {
		* {
			margin: 0;
			font-optical-sizing: none;
		}

		main {
			margin: 3rem auto;
			width: 70rem;
			max-width: 100%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			gap: 3rem;

			> * {
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 1.2rem;
				animation: fadeIn 0.3s;
			}

			a {
				color: var(--accent);
				text-decoration: none;
				transition-duration: 0.2s;
			}

			a:hover {
				opacity: 0.8;
			}
		}

		.article {
			gap: 1.8rem;

			> * {
				margin: 0 10vw;
			}

			img {
				border-radius: 0.6rem;
				border: 1px solid rgba(255, 255, 255, 0.1);
				box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.25);
			}
		}

		@keyframes fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}

		@keyframes popIn {
			0% {
				opacity: 0;
				transform: scale(0.1);
			}
			100% {
				opacity: 1;
				transform: scale(1);
			}
		}
	}
</style>
