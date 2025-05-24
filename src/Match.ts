export class Match {
	public readonly homeTeam: string;
	public readonly awayTeam: string;
	private _homeTeamScore: number;
	private _awayTeamScore: number;

	constructor(homeTeam: string, awayTeam: string) {
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
		this._homeTeamScore = 0;
		this._awayTeamScore = 0;
	}

	get homeTeamScore() {
		return this._homeTeamScore;
	}
	set homeTeamScore(newHomeTeamScore: number) {
		this._homeTeamScore = newHomeTeamScore;
	}

	get awayTeamScore() {
		return this._awayTeamScore;
	}
	set awayTeamScore(newAwayTeamScore: number) {
		this._awayTeamScore = newAwayTeamScore;
	}

	toString = () => {
		return `${this.homeTeam} ${this.homeTeamScore} - ${this.awayTeam} ${this._awayTeamScore}`;
	};
}
