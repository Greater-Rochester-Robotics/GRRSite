<script lang="ts">
	import Link from '$lib/Link.svelte';
</script>

{#snippet img512(name: string, alt: string, fullRes: number)}
	<div class="image-container">
		<img
			src="/media/photos/{name}.webp"
			srcset="/media/photos/{name}-512.webp 512w, /media/photos/{name}.webp {fullRes}w"
			sizes="(width <= 512px) 512px, 1920px"
			{alt}
		/>
	</div>
{/snippet}

<main class="article">
	<h1>About Us</h1>
	<p>
		Since 1999, Greater Rochester Robotics (G.R.R.) has been working to promote science, technology, and engineering
		throughout the Churchville-Chili School District and the greater Rochester area. We incorporate FIRST Robotics
		concepts into classroom activities, test and design new engineering concepts, and support existing and new FIRST
		Robotics teams in the region.
	</p>

	{@render img512('mvr2025-pits', 'Team 340 in the pits', 1920)}

	<p>
		On average, Team 340 consists of ~35-40 students per year. Our team has a dedicated group of almost 20 mentors, many
		of which are parents of current and former team members, in addition to many team alumni who return to mentor.
	</p>

	<h2>What is FIRST?</h2>
	<p style="text-align: center; opacity: 0.8;"><i>"For Inspiration and Recognition of Science and Technology"</i></p>
	<p>
		FIRST was founded in 1989 to inspire young people's interests and participation in science and technology. Based in
		Manchester, NH, the 501(c)(3) not-for-profit designs accessible, innovative programs that motivate young people to
		pursue education and career opportunities in science, technology, engineering, and math while building
		self-confidence, knowledge, and life skills.
	</p>
	<div>
		<p>
			Team 340 participates in the FIRST Robotics Competition (FRC) program. You can learn more on the <a
				href="https://www.firstinspires.org/robotics/frc">FIRST website</a
			>.
		</p>
	</div>

	{@render img512('mvr2025-celebration', 'Team 340 after winning the Miami Valley 2025 Regional', 1920)}

	<h2>What do we build?</h2>
	<p>
		Every year, FIRST releases a new challenge for students to build a industrial-sized robots weighing upwards of 150
		pounds to play a field game against other teams from around the world. Each season's robot is built under an intense
		time limit, strict rules, and limited resources, giving students a unique experience that emulates real-world
		engineering and problem solving.
	</p>
	<span><Link label="Learn more about our robots" url="/robots" /></span>

	{@render img512('curie2025-l4score', 'Team 340 competing at the 2025 championship', 1920)}

	<h2>Team History</h2>
	<p>
		Greater Rochester Robotics was founded by Chris Mikus and John Simmons, two engineers working for Nortel Networks,
		along with Jason Rees, a technology teacher for Churchville-Chili High School.
	</p>
	<p>
		Our team was originally open to any student at Churchville-Chili High School along with children of Nortel Networks
		employees. Students joined from all around the Greater Rochester area, including the Churchville-Chili, Fairport,
		Webster, Rush-Henrietta, and Rochester City School Districts. Our name, Greater Rochester Robotics, was selected to
		reflect our diverse group of students from the Rochester area. For over 25 years, we have maintained our diversity
		by inviting students to be part of our team if their home district does not facilitate a FIRST robotics team.
	</p>

	<h3>Why 340?</h3>
	<p>
		FRC team numbers used to change annually based on alphabetical order, but in 1998, FIRST froze the numbers.
		Initially, teams were identified by names of their sponsors, then assigned numbers each year. After 1998, new teams
		were assigned the next available number, with exceptions for teams that split or return after a break. Teams that
		joined in or before 1998 were assigned numbers 1-208. Numbers 209-335 were assigned for the 1999 build season. We
		registered early in the fall of 1999 and were assigned 340.
	</p>

	{@render img512('curie2025-setup', 'Team 340 preparing for a match at the 2025 championship', 1920)}
</main>

<style>
	.image-container {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>
