var score = 0;

function bowl(roundScore) {
	score += roundScore;
}

function getScore() {
	return score;
}

module.exports = {
	bowl: bowl,
	getScore: getScore
}