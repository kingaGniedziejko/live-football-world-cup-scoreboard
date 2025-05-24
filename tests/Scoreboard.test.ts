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

	describe('Update score tests', () => {
		it('should update a score', () => {
			scoreboard.startMatch('Spain', 'Brazil');
			scoreboard.updateScore('Spain', 'Brazil', 1, 2);
			const summary = scoreboard.getSummary();
			console.log(scoreboard.toString());

			expect(summary[0].homeTeam).toBe('Spain');
			expect(summary[0].homeTeamScore).toBe(1);
			expect(summary[0].awayTeam).toBe('Brazil');
			expect(summary[0].awayTeamScore).toBe(2);
		});

		it('should throw an error when updating if match does not exist', () => {
			expect(() => scoreboard.updateScore('Spain', 'Brazil', 1, 2)).toThrowError(
				'Match does not exist'
			);
		});

		it('should throw an error when updating if values are invalid', () => {
			expect(() => scoreboard.updateScore('Spain', 'Brazil', -1, -2)).toThrowError(
				'Values are invalid'
			);
		});
	});

	describe('Finish match tests', () => {
		it('should finish a match and remove it from scoreboard', () => {
			scoreboard.startMatch('Spain', 'Brazil');
			scoreboard.finishMatch('Spain', 'Brazil');
			const summary = scoreboard.getSummary();
			console.log(scoreboard.toString());

			expect(summary.length).toBe(0);
		});

		it('should throw an error when finishing if match does not exist', () => {
			expect(() => scoreboard.finishMatch('Spain', 'Brazil')).toThrowError('Match does not exist');
		});
	});

	describe('Summary tests', () => {
		it('should return sorted scoreboard summary', () => {
			scoreboard.startMatch('Mexico', 'Canada');
			scoreboard.updateScore('Mexico', 'Canada', 0, 5);

			scoreboard.startMatch('Spain', 'Brazil');
			scoreboard.updateScore('Spain', 'Brazil', 10, 2);

			scoreboard.startMatch('Germany', 'France');
			scoreboard.updateScore('Germany', 'France', 2, 2);

			scoreboard.startMatch('Uruguay', 'Italy');
			scoreboard.updateScore('Uruguay', 'Italy', 6, 6);

			scoreboard.startMatch('Argentina', 'Australia');
			scoreboard.updateScore('Argentina', 'Australia', 3, 1);

			const summary = scoreboard.getSummary();
			console.log(scoreboard.toString());

			const arraySummary = summary.map((match) => [
				match.homeTeam,
				match.homeTeamScore,
				match.awayTeam,
				match.awayTeamScore
			]);

			expect(arraySummary).toEqual([
				['Uruguay', 6, 'Italy', 6],
				['Spain', 10, 'Brazil', 2],
				['Mexico', 0, 'Canada', 5],
				['Argentina', 3, 'Australia', 1],
				['Germany', 2, 'France', 2]
			]);
		});
	});
});
