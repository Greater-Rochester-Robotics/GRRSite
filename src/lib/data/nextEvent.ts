export interface NextEvent {
	name: string;
	date: Date;
	link?: {
		label: string;
		url: string;
	};
}

export const nextEvent: NextEvent = {
	name: `Finger Lakes Regional`,
	date: new Date(1773266400000),
	link: {
		label: `Event Information`,
		url: `https://www.thebluealliance.com/event/2026nyro`
	}
};
