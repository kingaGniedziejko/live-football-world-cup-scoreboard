import { Scoreboard } from '../src/Scoreboard';

describe('Scoreboard tests', () => {
	let scoreboard: Scoreboard;

	beforeEach(() => {
		scoreboard = new Scoreboard();
	});

	describe('Start match tests', () => {
		it('should start a new match with score 0 - 0', () => {
			scoreboard.startMatch('Spain', 'Brazil');
			const summary = scoreboard.getSummary();
			console.log(scoreboard.toString());

			expect(summary.length).toBe(1);
			expect(summary[0].homeTeam).toBe('Spain');
			expect(summary[0].homeTeamScore).toBe(0);
			expect(summary[0].awayTeam).toBe('Brazil');
			expect(summary[0].awayTeamScore).toBe(0);
		});

		it('should throw an error when starting if match already exists', () => {
			scoreboard.startMatch('Spain', 'Brazil');
			expect(() => scoreboard.startMatch('Spain', 'Brazil')).toThrowError('Match already exists');
		});

		it('should throw an error when starting if team is already playing', () => {
			scoreboard.startMatch('Spain', 'Brazil');
			expect(() => scoreboard.startMatch('Spain', 'Germany')).toThrowError(
				'One of the teams is already playing'
			);
		});

		it('should throw an error when starting if values are invalid: empty value', () => {
			expect(() => scoreboard.startMatch('', 'Brazil')).toThrowError('Team names are invalid');
		});

		it('should throw an error when starting if values are invalid: the same value', () => {
			expect(() => scoreboard.startMatch('Spain', 'Spain')).toThrowError('Team names are invalid');
		});
	});
});
