import { Match } from './Match';

export class Scoreboard {
	private matches: Match[];

	constructor() {
		this.matches = [];
	}

	startMatch = (homeTeam: string, awayTeam: string) => {
		if (homeTeam === '' || awayTeam === '' || homeTeam === awayTeam)
			throw new Error('Team names are invalid');
		if (this.findMatch(homeTeam, awayTeam)) throw new Error('Match already exists');
		if (this.findMatchByTeam(homeTeam) || this.findMatchByTeam(awayTeam))
			throw new Error('One of the teams is already playing');

		this.matches.unshift(new Match(homeTeam, awayTeam));
	};

	updateScore = (
		homeTeam: string,
		awayTeam: string,
		homeTeamScore: number,
		awayTeamScore: number
	) => {
		if (homeTeamScore < 0 || awayTeamScore < 0) throw new Error('Values are invalid');
		const match = this.findMatch(homeTeam, awayTeam);
		if (match) {
			match.homeTeamScore = homeTeamScore;
			match.awayTeamScore = awayTeamScore;
		} else {
			throw new Error('Match does not exist');
		}
	};

	finishMatch = (homeTeam: string, awayTeam: string) => {
		const matchIndex = this.findMatchIndex(homeTeam, awayTeam);
		if (matchIndex === -1) {
			throw new Error('Match does not exist');
		} else {
			this.matches.splice(matchIndex, 1);
		}
	};

	getSummary = () => {
		return [...this.matches].sort(
			(a, b) => b.homeTeamScore + b.awayTeamScore - (a.homeTeamScore + a.awayTeamScore)
		);
	};

	toString = () => {
		return this.getSummary()
			.map((match, index) => `${index + 1}. ${match.toString()}`)
			.join('\n');
	};

	private findMatch = (homeTeam: string, awayTeam: string) => {
		return this.matches.find((match) => match.homeTeam === homeTeam && match.awayTeam === awayTeam);
	};

	private findMatchByTeam = (team: string) => {
		return this.matches.find((match) => match.homeTeam === team || match.awayTeam === team);
	};

	private findMatchIndex = (homeTeam: string, awayTeam: string) => {
		return this.matches.findIndex(
			(match) => match.homeTeam === homeTeam && match.awayTeam === awayTeam
		);
	};
}
