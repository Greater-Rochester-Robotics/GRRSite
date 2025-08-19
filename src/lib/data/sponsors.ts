export interface Sponsor {
	name: string;
	url?: string;
	image?: string;
	homepage?: boolean;
}

export const YEAR = 2025;

export const sponsors: Sponsor[] = [
	{
		name: `Churchville-Chili Central School District`,
		url: `https://www.cccsd.org`,
		image: `cccsd.webp`,
		homepage: true
	},
	{
		name: `Bausch Foundation`,
		url: `https://www.bauschfoundation.org`,
		image: `bausch-foundation.webp`,
		homepage: true
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
		name: `Team 340 Alumni & Mentors`
	}
];
