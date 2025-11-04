export interface Sponsor {
	name: string;
	url?: string;
	image?: string;
	homepage?: boolean;
	description?: string[];
}

export const YEAR = 2025;

export const sponsors: Sponsor[] = [
	{
		name: `Churchville-Chili Central School District`,
		url: `https://www.cccsd.org`,
		image: `cccsd.webp`,
		homepage: true,
		description: [
			`The Churchville-Chili Central School District is committed to challenging students to strive for excellence while developing unique talents and becoming respectful, resourceful citizens and contributing members of an interconnected global society.`,
			`CCCSD has provided unwavering support and encouragement throughout Team 340's history, and has consistently remained one of our greatest sponsors. Their partnership has allowed us to continue to have an impact on both our students and community.`
		]
	},
	{
		name: `Bausch Foundation`,
		url: `https://www.bausch.com`,
		image: `bausch-foundation.webp`,
		homepage: true,
		description: [
			`Bausch & Lomb's portfolio of products is strategically and precisely designed with the goal of helping millions of people worldwide address their vision and eye health needs. Their work to develop modernized vision care, consumer health care, as well as surgical and pharmaceutical products help people see and live better on a global scale.`,
			`Bausch & Lomb has been Team 340's longest and greatest sponsor, generously supporting the team since 2003. It is with their help that we have been able to sustain and grow our program for over 20 years and counting.`
		]
	},
	{
		name: `Donald F. and Maxine B. Davison Foundation`,
		image: `dm-davison-foundation.webp`,
		homepage: true
	},
	{
		name: `L3Harris`,
		url: `https://www.l3harris.com`,
		image: `l3harris.webp`,
		homepage: true
	},
	{
		name: `C&M Forwarding`,
		url: `https://cmforwarding.com`,
		homepage: true
	},
	{
		name: `Ryan Pappa`
	},
	{
		name: `REV Robotics`,
		url: `https://www.revrobotics.com`,
		image: `rev-robotics.webp`
	},
	{
		name: `The Weismore Family`
	},
	{
		name: `Optimax`,
		url: `https://www.optimaxsi.com`,
		image: `optimax.webp`
	},
	{
		name: `The Blank Family`
	},
	{
		name: `Luma Vision`,
		url: `https://luma.vision`,
		image: `luma-vision.webp`
	},
	{
		name: `Transparent Materials`
	},
	{
		name: `P&CG`,
		url: `https://www.pandcg.com`
	},
	{
		name: `Stowe Lawfirm`
	},
	{
		name: `Alumni and Mentors`
	}
];
