export interface NextEvent {
	name: string;
	date: Date;
	link?: {
		label: string;
		url: string;
	};
}

export const nextEvent: NextEvent = {
	name: `2026 FRC Season Kickoff`,
	date: new Date(1768064400000),
	link: {
		label: `FIRST Website`,
		url: `https://www.firstinspires.org/programs/frc/game-and-season`
	}
};
