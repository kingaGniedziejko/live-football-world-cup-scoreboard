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

	get awayTeamScore() {
		return this._awayTeamScore;
	}

	toString = () => {
		return `${this.homeTeam} ${this.homeTeamScore} - ${this.awayTeam} ${this._awayTeamScore}`;
	};
}
