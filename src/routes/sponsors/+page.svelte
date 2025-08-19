<script>
	import { YEAR } from '$lib/data/sponsors';
	import Link from '$lib/Link.svelte';
	import SponsorList from '$lib/SponsorList.svelte';
</script>

<main>
	<h1>{YEAR} Sponsors</h1>
	<div>
		<p>
			We are grateful to our sponsors for providing the resources necessary to build competitive robots and positively
			impact our students every year. We're proud to represent them at competitions, where we showcase not only our
			technical skills but also the altruism and support that drives our success. The organizations and individuals
			listed below offer generous financial contributions that make our program possible.
		</p>
		<Link label="Learn about Sponsoring 340" url="/files/340_Sponsorship_2025.pdf" />
	</div>
	<span></span>
	<div>
		<SponsorList />
	</div>
</main>

<style>
	main {
		gap: 1.4rem;

		> * {
			margin: 0 7vw;
		}
	}
</style>
