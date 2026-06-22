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
	date: new Date(1792238400000),
	link: {
		label: `Event Website`,
		url: `https://ruckus.penfieldrobotics.com`
	}
};
