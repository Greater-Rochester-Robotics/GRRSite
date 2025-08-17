<main class="article">
	<h1 style="text-align: center;">Contact Us</h1>

	<span style="height: 1rem;"></span>

	<div id="container">
		<div>
			<h2>General Inquiries</h2>
			<p>contact@team340.org</p>

			<span style="height: 1rem;"></span>

			<h2>Head Coach</h2>
			<p>jrees@cccsd.org</p>
			<p><i>Jason Rees</i></p>
		</div>

		<div>
			<h2>Mailing Address</h2>
			<p>Attn: Jason Rees</p>
			<p>Churchville-Chili Senior High School</p>
			<p>5786 Buffalo Rd</p>
			<p>Churchville, NY 14428</p>
		</div>
	</div>
</main>

<style>
	#container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 6rem;

		div {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
		}

		@media (width < 50rem) {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
