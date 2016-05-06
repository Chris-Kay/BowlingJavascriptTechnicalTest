var scoreCard = require('../src/score-card.js');

describe('The bowling scorecard', function() {

	beforeEach(function() {
		scoreCard.reset();
	});

	it('registers a score', function() {
		scoreCard.bowl(3);
		expect(scoreCard.getScore()).toBe(3);
	});

	it('registers multiple scores', function() {
		scoreCard.bowl(3);
		scoreCard.bowl(6);

		expect(scoreCard.getScore()).toBe(9);	
	});

	it('registers a spare', function() {
		scoreCard.bowl(3);
		scoreCard.bowl(7); 
		scoreCard.bowl(2); //Doubled 

		expect(scoreCard.getScore()).toBe(14);	
	});

	it('registers a strike', function() {
		scoreCard.bowl(10);
		scoreCard.bowl(3); // 3 * 2
		scoreCard.bowl(3); // 3 * 2

		expect(scoreCard.getScore()).toBe(22);	
	});

	it('registers a perfect game', function() {
		for(i = 0; i < 13; i++) {
			scoreCard.bowl(10);
		}
		expect(scoreCard.getScore()).toBe(300);
	});

	it('stops counting after the game has finished', function() {
		for(i = 0; i < 18; i++) {
			scoreCard.bowl(10);
		}
		expect(scoreCard.getScore()).toBe(300);
	});
});