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
});