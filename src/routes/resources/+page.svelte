<script>
	import Download from '$lib/Download.svelte';
	import Link from '$lib/Link.svelte';
</script>

<main class="article">
	<h1>Resources</h1>

	<span></span>

	<h2>Event Information</h2>
	<p>
		Information and results from official FIRST events are available on their website. Alternatively, this information
		can also be accessed on The Blue Alliance (TBA), a third-party website and app that hosts a more user-friendly
		interface.
	</p>
	<p>
		For keeping up-to-date with our event participation and to watch us compete live, we recommend using The Blue
		Alliance. Below are links to Team 340's pages.
	</p>
	<div style="display: flex; gap: 0.8rem;">
		<Link label="FRC Event Web" url="https://frc-events.firstinspires.org/team/340" />
		<Link label="The Blue Alliance" url="https://www.thebluealliance.com/team/340" />
	</div>

	<span></span>

	<h2>Build Threads</h2>
	<p>
		In recent seasons, Team 340 has been sharing our build process and strategy in-season on Chief Delphi, an online
		forum dedicated to discussion about the FIRST Robotics Competition. Below are links to each season's corresponding
		thread.
	</p>

	<div style="display: flex; flex-direction: row; justify-content: start; gap: 1.2rem;">
		<Link
			label="2024"
			url="https://www.chiefdelphi.com/t/frc-team-340-greater-rochester-robotics-2024-build-thread-open-alliance/443107"
		/>
		<Link label="2025" url="https://www.chiefdelphi.com/t/frc-340-g-r-r-2025-build-thread-open-alliance/477531" />
	</div>

	<span></span>

	<h2>Code Releases</h2>
	<p>
		With the goal of fostering collaboration, Team 340 releases our robot code publicly in our GitHub organization.
		There we also share other programming-related resources, such as robot logs and our template repository.
	</p>
	<span><Link label="GitHub.com" url="https://github.com/Greater-Rochester-Robotics" /></span>

	<span></span>

	<h2>Branding</h2>

	<div id="branding-images">
		<div>
			<img src="/files/branding/340_simplified.svg" alt="Team 340 Logo, Simplified" />
			<div class="branding-image-footer">
				<b>Simplified</b>
				<Download label="PNG" url="/files/branding/340_simplified.png" />
				<Download label="SVG" url="/files/branding/340_simplified.svg" />
			</div>
		</div>

		<div>
			<img src="/files/branding/340.svg" alt="Team 340 Logo, Regular" />
			<div class="branding-image-footer">
				<b>Regular</b>
				<Download label="PNG" url="/files/branding/340.png" />
				<Download label="SVG" url="/files/branding/340.svg" />
			</div>
		</div>
	</div>

	<span style="height: 3rem;"></span>

	<div id="branding-colors">
		<div>
			<div class="branding-color-description">
				<h3>Pantone 158 C</h3>
				<p>Hex: #e87722</p>
				<p>RGB: 232, 119, 34</p>
				<p>HSL: 26°, 81%, 52%</p>
				<p>HSV: 26°, 85%, 91%</p>
			</div>
			<div class="branding-color-display" style="background-color: #e87722;"></div>
		</div>

		<div>
			<div class="branding-color-description">
				<h3>White</h3>
				<p>Hex: #ffffff</p>
				<p>RGB: 255, 255, 255</p>
				<p>HSL: 0°, 0%, 100%</p>
				<p>HSV: 0°, 0%, 100%</p>
			</div>
			<div class="branding-color-display" style="background-color: #ffffff;"></div>
		</div>
	</div>
</main>

<style>
	#branding-images,
	#branding-colors {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		gap: 6rem;

		@media (width < 60rem) {
			flex-direction: column;
		}
	}

	#branding-images {
		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			width: 20rem;

			img {
				height: 10rem;
				width: 10rem;
				border: none;
				box-shadow: none;
			}

			.branding-image-footer {
				width: 16rem;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				gap: 1rem;
			}
		}
	}

	#branding-colors {
		> div {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 2rem;

			.branding-color-display {
				width: 7rem;
				height: 7rem;
				border-radius: 1rem;
			}

			.branding-color-description {
				width: 9rem;
				display: flex;
				flex-direction: column;
				gap: 0.4rem;

				h3 {
					font-size: 1.2rem;
					margin-bottom: 0.4rem;
				}

				p {
					font-size: 0.8rem;
					font-weight: 300;
				}
			}
		}
	}
</style>
