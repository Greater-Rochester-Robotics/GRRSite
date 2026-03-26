export interface NextEvent {
	name: string;
	date: Date;
	link?: {
		label: string;
		url: string;
	};
}

export const nextEvent: NextEvent = {
	name: `FIRST Championship`,
	date: new Date(1777464000000),
	link: {
		label: `Event Information`,
		url: `https://www.firstinspires.org/programs/first-championship`
	}
};
