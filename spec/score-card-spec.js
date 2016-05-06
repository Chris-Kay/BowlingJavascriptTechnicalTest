var scoreCard = require('../src/score-card.js');

describe('The bowling scorecard', function() {
	it('registers a score', function() {
		scoreCard.bowl(3);
		expect(scoreCard.getScore()).toBe(3);
	});
});