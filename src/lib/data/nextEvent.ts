export interface NextEvent {
	name: string;
	date: Date;
	link?: {
		label: string;
		url: string;
	};
}

export const nextEvent: NextEvent = {
	name: `Flower City Frenzy`,
	date: new Date(1780750800000),
	link: {
		label: `Event Website`,
		url: `https://sites.google.com/rcsd121.org/fcf?usp=sharing`
	}
};
