export interface NextEvent {
	name: string;
	date: Date;
	link?: {
		label: string;
		url: string;
	};
}

export const nextEvent: NextEvent = {
	name: `Overtime Sunday`,
	date: new Date(1762088400000),
	link: {
		label: `Event Website`,
		url: `https://stemleycup.ca`
	}
};
