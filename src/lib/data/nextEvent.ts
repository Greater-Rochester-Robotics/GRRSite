export interface NextEvent {
	name: string;
	date: Date;
	link?: {
		label: string;
		url: string;
	};
}

export const nextEvent: NextEvent = {
	name: `Rah Cha Cha Ruckus`,
	date: new Date(1759060800000),
	link: {
		label: `Event Website`,
		url: `https://ruckus.penfieldrobotics.com`
	}
};
