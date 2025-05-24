import { Match } from './Match';

export class Scoreboard {
	private matches: Match[];

	constructor() {
		this.matches = [];
	}

	startMatch = (homeTeam: string, awayTeam: string) => {};

	getSummary = () => {
		return this.matches;
	};
}
