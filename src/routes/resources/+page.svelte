<script lang="ts">
	import Download from '$lib/Download.svelte';
	import Link from '$lib/Link.svelte';
	import SectionHead from '$lib/SectionHead.svelte';
</script>

<svelte:head>
	<title>Team 340 - Resources</title>
	<meta
		name="description"
		content="Resources from Team 340 for students, parents, sponsors, and the broader FIRST community. Includes branding and logos, technical information, and helpful links."
	/>
</svelte:head>

<main class="article">
	<h1>Resources</h1>

	<span></span>

	<SectionHead text="Event Information" />
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

	<SectionHead text="Code Releases" />
	<p>
		With the goal of fostering collaboration, Team 340 releases our robot code publicly in our GitHub organization.
		There we also share other programming-related resources, such as robot logs and our template repository.
	</p>
	<span><Link label="GitHub.com" url="https://github.com/Greater-Rochester-Robotics" /></span>

	<span></span>

	<SectionHead text="Practice Field Access" />
	<p>
		Team 340 maintains a full-field practice setup ("The WAREhouse") alongside 3015 Ranger Robotics and 6868 Cadet
		Robotics. Located next to the Rochester Technology Park, FIRST teams are welcome to utilize our facility under
		supervision of team mentors.
	</p>

	<p style="display: block;">
		For more information, email <span style="color: var(--accent);">contact@team340.org</span>
	</p>

	<img
		src="/media/photos/warehouse-2025.webp"
		srcset="/media/photos/warehouse-2025-512.webp 512w, /media/photos/warehouse-2025.webp 1920w"
		sizes="(width <= 512px) 512px, 1920px"
		alt="The WAREhouse"
	/>

	<span></span>

	<SectionHead text="Branding" />
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

	<span style="height: 1.5rem;"></span>

	<div id="branding-colors">
		<div>
			<div class="branding-color-description">
				<h3>Pantone® 158 C</h3>
				<p>Hex: #E87722</p>
				<p>RGB: 232, 119, 34</p>
				<p>CMYK: 0, 62, 97, 0</p>
			</div>
			<div class="branding-color-display" style="background-color: #e87722;"></div>
		</div>

		<div>
			<div class="branding-color-description">
				<h3>White</h3>
				<p>Hex: #FFFFFF</p>
				<p>RGB: 255, 255, 255</p>
				<p>CMYK: 0, 0, 0, 0</p>
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
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		gap: 4rem;

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
