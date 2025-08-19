export interface Robot {
	year: number;
	name: string;
	headline?: string;
	teamPhoto?: string;
	events: Array<{
		name: string;
		division?: string;
		awards: string[];
		banners: string[];
	}>;
	gameInfo: {
		name: string;
		description: string;
		descriptionUrl: string;
		animationEmbed?: string;
	};
}

// TODO
// 2021-2023 Better photos
// 2019 SBPLI may be preferable for team photo (Finalist Medals w/o other teams)
// 2017 Buckeye may preferable for team photo (Winner)
// 2015 Better team photo

export const ATTENDED_CHAMPS = `Attended World Championship`;

export const robots: Robot[] = [
	{
		year: 2025,
		name: `Goose`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Winners`, `Industrial Design Award`],
				banners: [`Winner`]
			},
			{
				name: `Miami Valley Regional`,
				awards: [`Regional Winners`, `Autonomous Award`],
				banners: [`Winner`]
			},
			{
				name: `FIRST Championship`,
				division: `Curie`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `REEFSCAPE`,
			description: `Two alliances of three robots each work to score PVC pipes (called Coral) and playground balls (called Algae) into goals on their side of the field. At the end of the match, robots move to a truss structure called the Barge and climb metal Cages to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Reefscape`,
			animationEmbed: `https://www.youtube.com/embed/YWbxcjlY9JY`
		}
	},
	{
		year: 2024,
		name: `Mushu`,
		teamPhoto: `Team 340 @ Greater Pittsburgh Regional`,
		events: [
			{
				name: `Greater Pittsburgh Regional`,
				awards: [`Regional Finalists`, `Creativity Award`],
				banners: []
			},
			{
				name: `Finger Lakes Regional`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Crescendo`,
			description: `Two alliances of three robots each work to score foam rings, called Notes, into goals on their end of the field. At the end of the match, robots move to truss structures called Stages and climb on metal chains to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Crescendo_(FIRST)`,
			animationEmbed: `https://www.youtube.com/embed/9keeDyFxzY4`
		}
	},
	{
		year: 2023,
		name: `Lily`,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Finalists`],
				banners: []
			},
			{
				name: `New York Tech Valley Regional`,
				awards: [`Creativity Award`],
				banners: []
			}
		],
		gameInfo: {
			name: `Charged Up`,
			description: `Two alliances of three robots each work to retrieve game pieces (cubes and cones) from substations across the field and score them into their alliance's grid.  At the end of the match, robots race to dock (contact) or engage (balance) with their charge station to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Charged_Up_(FIRST)`,
			animationEmbed: `https://www.youtube.com/embed/0zpflsYc4PA`
		}
	},
	{
		year: 2022,
		name: `Covert`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Buckeye Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Winners`, `Quality Award`],
				banners: [`Winner`]
			},
			{
				name: `Buckeye Regional`,
				awards: [`Regional Winners`, `Autonomous Award`],
				banners: [`Winner`]
			},
			{
				name: `FIRST Championship`,
				division: `Roebling`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Rapid React`,
			description: `Two alliances of three robots each work to pick up inflatable balls, called Cargo, and shoot them into low and high hubs. At the end of the match, robots climb a series of rungs called the Hangar to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Rapid_React`,
			animationEmbed: `https://www.youtube.com/embed/LgniEjI9cCM`
		}
	},
	{
		year: 2021,
		name: `Ann-G 2.0`,
		headline: `At Home Challenge`,
		events: [
			{
				name: `INFINITE RECHARGE At Home Challenge`,
				division: `Strontium Group`,
				awards: [`Skills Competition Finalist`, `Industrial Design Award`],
				banners: []
			}
		],
		gameInfo: {
			name: `Infinite Recharge (2021)`,
			description: `Due to the COVID-19 pandemic, the 2021 season is the first and only season in history to begin with no events scheduled, with teams instead invited to take part in three virtual challenges that included judged awards.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Infinite_Recharge_(2021)`
		}
	},
	{
		year: 2020,
		name: `Ann-G`,
		headline: `Qualified for World Championship`,
		events: [
			{
				name: `Miami Valley Regional`,
				awards: [`Regional Winners`],
				banners: [`Winner`]
			}
		],
		gameInfo: {
			name: `Infinite Recharge`,
			description: `Two alliances of three robots each work to shoot foam balls known as Power Cells into high and low goals to activate a Shield Generator, manipulating a Control Panel to activate this shield, and returning to the Shield Generator to park or climb and balance a steel bar at the end of the match to earn additional points. Due to the COVID-19 pandemic, the 2020 season was suspended on March 12th, with remaining events officially cancelled in May.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Infinite_Recharge`,
			animationEmbed: `https://www.youtube.com/embed/gmiYWTmFRVE`
		}
	},
	{
		year: 2019,
		name: `Mantis`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Finalists`, `Judges' Award`],
				banners: []
			},
			{
				name: `SBPL2 Long Island Regional #2`,
				awards: [`Regional Finalists`, `Excellence in Engineering Award`, `Wildcard`],
				banners: []
			},
			{
				name: `FIRST Championship`,
				division: `Daly`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Destination: Deep Space`,
			description: `Two alliances of three robots each work to place polycarbonate hatch panels and orange rubber balls or "cargo" on rockets and cargo ships. At the end of the match, robots return to their HAB platform to climb for additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Destination:_Deep_Space`,
			animationEmbed: `https://www.youtube.com/embed/Mew6G_og-PI`
		}
	},
	{
		year: 2018,
		name: `Shak`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Central New York Regional`,
				awards: [`Regional Winners`],
				banners: [`Winner`]
			},
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Winners`, `Gracious Professionalism Award`],
				banners: [`Winner`]
			},
			{
				name: `FIRST Championship`,
				division: `Tesla`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `POWER UP`,
			description: `Two alliances of three robots each work to place milk crates, known as "Power Cubes", on large balancing scales to tip the scale and gain ownership to generate points. Alliances can also trade Power Cubes for power ups, giving them a temporary advantage in a match. At the end of the match, robots climb rungs on the center balancing scale to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/FIRST_Power_Up`,
			animationEmbed: `https://www.youtube.com/embed/HZbdwYiCY74`
		}
	},
	{
		year: 2017,
		name: `Bruce`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Finalists`, `Industrial Design Award`, `Wildcard`],
				banners: []
			},
			{
				name: `Buckeye Regional`,
				awards: [`Regional Winners`, `Excellence in Engineering Award`],
				banners: [`Winner`]
			},
			{
				name: `FIRST Championship`,
				division: `Daly`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Steamworks`,
			description: `Two alliances of three robots each work to load their alliance's airship with gears, and shoot wiffle balls known as "fuel" into a simulated boiler to generate steam for flight. At the end of the match, robots climb ropes deployed from their airship to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/FIRST_Steamworks`,
			animationEmbed: `https://www.youtube.com/embed/EMiNmJW7enI`
		}
	},
	{
		year: 2016,
		name: `Toast`,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Greater Pittsburgh Regional`,
				awards: [],
				banners: []
			},
			{
				name: `Finger Lakes Regional `,
				awards: [`Regional Finalists`, `Volunteer of the Year (Rob Heslin)`],
				banners: []
			}
		],
		gameInfo: {
			name: `Stronghold`,
			description: `Two alliances of three robots each work to capture the opposing alliance's towers by firing "boulders" (small foam balls), and breaching "defenses" (field obstacles). At the end of the match, robots scale their opponent's tower to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/FIRST_Stronghold`,
			animationEmbed: `https://www.youtube.com/embed/VqOKzoHJDjA`
		}
	},
	{
		year: 2015,
		name: `Unknown`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ New York Tech Valley Regional`,
		events: [
			{
				name: `New York Tech Valley Regional`,
				awards: [`Regional Winners`],
				banners: [`Winner`]
			},
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Finalists`, `Gracious Professionalism Award`],
				banners: []
			},
			{
				name: `FIRST Championship`,
				division: `Tesla`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Recycle Rush`,
			description: `Two alliances of three robots each work to pick up and stack totes on scoring platforms, put pool noodles ("litter") inside recycling containers, and place the containers on top of the tote stacks.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Recycle_Rush`,
			animationEmbed: `https://www.youtube.com/embed/W6UYFKNGHJ8`
		}
	},
	{
		year: 2014,
		name: `Oshie`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ New York Tech Valley Regional`,
		events: [
			{
				name: `New York Tech Valley Regional`,
				awards: [`Regional Chairman's Award`],
				banners: [`Chairman's Award`]
			},
			{
				name: `Finger Lakes Regional `,
				awards: [`Regional Finalists`, `Engineering Inspiration`, `Woodie Flowers Finalist Award (Justin Montois)`],
				banners: [`Woodie Flowers Finalist Award`]
			},
			{
				name: `FIRST Championship`,
				division: `Newton`,
				awards: [`Team Spirit Award`],
				banners: []
			}
		],
		gameInfo: {
			name: `Aerial Assist`,
			description: `Two alliances of three robots each work to pass a 2-foot exercise ball to their alliance partners, transferring them from one end of the field over to their alliance's scoring area.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Aerial_Assist`,
			animationEmbed: `https://www.youtube.com/embed/oxp4dkMQ1Vo`
		}
	},
	{
		year: 2013,
		name: `Argon`,
		teamPhoto: `Team 340 @ Midknight Mayhem 2013`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Excellence in Engineering Award`],
				banners: []
			},
			{
				name: `Buckeye Regional`,
				awards: [`Excellence in Engineering Award`, `Industrial Safety Award`],
				banners: []
			}
		],
		gameInfo: {
			name: `Ultimate Ascent`,
			description: `Two alliances of three robots each work to score discs in low, medium, high, and "pyramid" goals to score points. At the end of the match, robots climb their alliance's pyramid to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Ultimate_Ascent`,
			animationEmbed: `https://www.youtube.com/embed/itHNW2OFr4Y`
		}
	},
	{
		year: 2012,
		name: `Karl`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [
					`Regional Chairman's Award`,
					`Regional Finalists`,
					`FIRST Dean's List Finalist Award (Christa Lawniczak)`
				],
				banners: [`Chairman's Award`]
			},
			{
				name: `Buckeye Regional`,
				awards: [`Regional Winners`, `Engineering Inspiration Award`],
				banners: [`Winner`]
			},
			{
				name: `FIRST Championship`,
				division: `Newton`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Rebound Rumble`,
			description: `Two alliances of three robots each work to score basketballs into hoops of various heights. At the end of the match, robots balance their alliance's bridge to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Rebound_Rumble`,
			animationEmbed: `https://www.youtube.com/embed/gYWscqruBRA`
		}
	},
	{
		year: 2011,
		name: `Unknown`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Chairman's Award`, `Regional Finalists`, `Website Award`],
				banners: [`Chairman's Award`]
			},
			{
				name: `Chesapeake Regional`,
				awards: [`Coopertition Award`, `Creativity Award`],
				banners: []
			},
			{
				name: `FIRST Championship`,
				division: `Newton`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Logo Motion`,
			description: `Two alliances of three robots each work to score inner tubes of various shapes onto pegs to earn points. At the end of the match, robots deploy mini bots to climb tower poles as quickly as possible to earn additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Logo_Motion`,
			animationEmbed: `https://www.youtube.com/embed/aH_9QHZpsfs`
		}
	},
	{
		year: 2010,
		name: `Unknown`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Chairman's Award`, `Website Award`],
				banners: [`Chairman's Award`]
			},
			{
				name: `FIRST Championship`,
				division: `Curie`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Breakaway`,
			description: `Two alliances of three robots each work to direct soccer balls into goals, traverse bumps in the field, go through a tunnel located at the center of the field, and suspend themselves on towers.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Breakaway_(FIRST)`,
			animationEmbed: `https://www.youtube.com/embed/Bb1P43OSfOU`
		}
	},
	{
		year: 2009,
		name: `Unknown`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Chairman's Award`, `Regional Finalists`],
				banners: [`Chairman's Award`]
			},
			{
				name: `FIRST Championship`,
				division: ``,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Lunacy`,
			description: `Lunacy is the game for the 2009 FIRST Robotics Competition. The name and some of the features of the game honor the 40th anniversary of the first manned mission to the Moon (Latin: Luna). The goal of the game is to score as many of the game pieces in the opposing side's trailers as possible.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Lunacy_(FIRST)`,
			animationEmbed: `https://www.youtube.com/embed/nEh3Wzd1jDI`
		}
	},
	{
		year: 2008,
		name: `Zella`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Chairman's Award`, `Woodie Flowers Finalist Award (Kate Nordland)`],
				banners: [`Chairman's Award`, `Woodie Flowers Finalist Award`]
			},
			{
				name: `FIRST Championship`,
				division: `Curie`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `FIRST Overdrive`,
			description: `FIRST Overdrive was the 2008 game for the FIRST Robotics Competition, announced on January 5, 2008. In it, teams competed to complete counterclockwise laps around a central barrier while manipulating large 40 in (1 m) diameter "Trackballs" over and under overpasses to score additional points.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/FIRST_Overdrive`,
			animationEmbed: `https://www.youtube.com/embed/D5oL7aLH0T4`
		}
	},
	{
		year: 2007,
		name: `Unknown`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Finalists`, `Regional Engineering Inspiration Award`, `Website Award`],
				banners: []
			},
			{
				name: `FIRST Championship`,
				division: `Newton`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Rack 'n Roll`,
			description: `Rack 'n Roll is the game for the 2007 FIRST Robotics Competition season, announced on January 6, 2007. In it, two alliances of three teams each compete to arrange toroidal game pieces on a central arena element known as "The Rack"`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Rack_%27n_Roll`,
			animationEmbed: `https://www.youtube.com/embed/khTGSKvDyS4`
		}
	},
	{
		year: 2006,
		name: `Unknown`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Finger Lakes Regional`,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Chairman's Award`, `Woodie Flowers Finalist Award (Jason Rees)`, `Website Design Award`],
				banners: [`Chairman's Award`, `Woodie Flowers Finalist Award`]
			},
			{
				name: `FIRST Championship`,
				division: `Newton`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Aim High`,
			description: `Aim High was the 2006 game for the FIRST Robotics Competition. The competition involved teams competing to gain points by delivering balls into goals and positioning their robots in certain positions on the playing field. The teams took it in turn to provide defense and attack.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Aim_High`,
			animationEmbed: `https://www.youtube.com/embed/1Vuwjse90AA`
		}
	},
	{
		year: 2005,
		name: `Bertha`,
		headline: ATTENDED_CHAMPS,
		events: [
			{
				name: `Finger Lakes Regional`,
				awards: [`Regional Chairman's Award`, `Visualization Award`],
				banners: [`Chairman's Award`]
			},
			{
				name: `FIRST Championship`,
				division: `Newton`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Triple Play`,
			description: `This game was the first to feature three robots per alliance. The primary game pieces were called "Tetras" which are tetrahedra made from long PVC pipe segments. The game was played on a field set up like a tic-tac-toe board, with nine large tetrahedral goals in three rows of three. The object of the game was to place the scoring tetras on the larger goals, creating rows of three by having a tetra of your alliance's color at the highest point on the goal. Triple Play was a strategically intensive game, requiring quick thinking on the part of the drivers and operators to optimize the field for their alliance.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Triple_Play_(FIRST)`,
			animationEmbed: `https://www.youtube.com/embed/6ePwDtrthWE`
		}
	},
	{
		year: 2004,
		name: `Roxanne`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340 @ Buckeye Regional`,
		events: [
			{
				name: `Buckeye Regional`,
				awards: [`Regional Winners`, `Visualization Award`, `Quality Award`],
				banners: [`Winner`]
			},
			{
				name: `FIRST Championship`,
				division: `Newton`,
				awards: [`Championship Division Winner`],
				banners: [`Winner`]
			},
			{
				name: `Einstein Field`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `FIRST Frenzy`,
			description: `FIRST Frenzy: Raising the Bar was the 2004 game for the FIRST Robotics Competition. The game included elements from previous years' games, including mobile goals, "capping" goals with large inflatable balls, and others. In Raising the Bar, teams scored by having their human player score purple balls in any of the goals, capping the goals with a multiplier ball, or hanging their robot from the 10-foot "chin up bar".`,
			descriptionUrl: `https://en.wikipedia.org/wiki/FIRST_Frenzy:_Raising_the_Bar`,
			animationEmbed: `https://www.youtube.com/embed/JIGggWdMekk`
		}
	},
	{
		year: 2003,
		name: `TiGrr 3`,
		headline: `Qualified for World Championship`,
		teamPhoto: `Team 340 with 25 Raider Robotix and 102 The Gearheads @ J&J Mid-Atlantic Regional`,
		events: [
			{
				name: `Buckeye Regional`,
				awards: [],
				banners: []
			},
			{
				name: `Pittsburgh Regional`,
				awards: [`Visualization Award`],
				banners: []
			},
			{
				name: `J&J Mid-Atlantic Regional`,
				awards: [`Regional Winners`, `Quality Award`],
				banners: [`Winner`]
			}
		],
		gameInfo: {
			name: `Stack Attack`,
			description: `Stack Attack was the game for the 2003 FIRST Robotics Competition. In Stack Attack, two teams of two robots each attempt to win by moving large Sterilite bins into their zone and arranging them into stacks. Robots can knock down their opponents stacks in order to take points away from the opposition. 2003 was the first year which featured an autonomous portion of the match where robots could only move according to pre-programmed instructions.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Stack_Attack`,
			animationEmbed: `https://www.youtube.com/embed/lEefJljqyQU`
		}
	},
	{
		year: 2002,
		name: `TiGrr 2`,
		headline: ATTENDED_CHAMPS,
		events: [
			{
				name: `New York City Regional`,
				awards: [`Driving Tomorrows Technology Award`],
				banners: []
			},
			{
				name: `FIRST Championship`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Zone Zeal`,
			description: `Zone Zeal was the 2002 game for the FIRST Robotics Competition. In it, robots playing in alliances of 2 competed to move goals and balls into various zones within the playing field. Goals were worth more points if they had more balls in them and the points for the goals were awarded to either alliance depending on the zone which the goal was in at the ed of the match. Bonus points at the end of the match were awarded to robots who were in their home zones.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Zone_Zeal`
		}
	},
	{
		year: 2001,
		name: `TiGrr`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340's 2nd Season`,
		events: [
			{
				name: `Long Island Regional`,
				awards: [`#1 Seed`, `Imagery Award`],
				banners: []
			},
			{
				name: `FIRST Championship`,
				division: `Galileo`,
				awards: [`Championship Division Winner`],
				banners: [`Winner`]
			},
			{
				name: `Einstein Field`,
				awards: [],
				banners: []
			}
		],
		gameInfo: {
			name: `Diabolical Dynamics`,
			description: `Diabolical Dynamics, the 2001 game for the FIRST Robotics Competition, was played 4 robots against 0, competing for high scores. The playing field was a carpeted, rectangular area divided in half by a railing with a central bridge, which could tilt to either side of the field or remain level. Two 7' tall movable goals begin on opposite sides of the field. Each match is a maximum of two minutes long. Alliances can end the match at any time. Alliances score one point for each small ball in the goal, ten points for each large ball in the goal, ten points for each robot in the End Zone, and ten points if the stretcher is in the End Zone. The alliance doubles its score for each goal that is on the bridge if the bridge is balanced, and multiplies its score by a factor of up to three by ending the match before the two minute time limit.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Diabolical_Dynamics`
		}
	},
	{
		year: 2000,
		name: `Unnamed`,
		headline: ATTENDED_CHAMPS,
		teamPhoto: `Team 340's Rookie Season`,
		events: [
			{
				name: `J&J Mid-Atlantic Regional`,
				awards: [`Rookie All-Star`],
				banners: []
			},
			{
				name: `UTC New England Regional`,
				awards: [`Regional Finalists`],
				banners: []
			},
			{
				name: `FIRST Championship`,
				awards: [`Kettering University Scholarship`],
				banners: []
			}
		],
		gameInfo: {
			name: `Co-Opertition FIRST`,
			description: `Co-Opertition FIRST was the 2000 game for the FIRST Robotics Competition. The playing field was a carpeted, rectangular area with two 6' tall trough-style goals located midfield, one for each alliance. Between the goals was an 8' wide ramp with a 5' tall bar, which robots hung on to score points. At the start of each match, each alliance station contains seven yellow balls and one black ball. Fifteen yellow balls and two black balls are located at the far end of the playing field. Alliances receive one point for each yellow ball and five points for each black ball in their goal, and not in contact with their robot. Robots that were completely on the ramp each earned five points for their alliance. A robot hanging from the horizontal bar connecting the two goals earned ten points for its alliance.`,
			descriptionUrl: `https://en.wikipedia.org/wiki/Co-Opertition_FIRST`
		}
	}
];
