var round = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
current = 0;

function bowl(roll) {
	round[current++] = roll;
}

function isSpare(round, i) {
	return round[i] + round[i + 1] === 10
}

function getScore() {
	var score = 0,
	i = 0;

	for(var frame = 0; frame < 10; frame+=1) {
		if(isSpare(round, i)) {
			score += 10 + round[i + 2];
			i += 2;
		} else {
			// Open Frame
			score += round[i] + round[i + 1];
			i += 2;
		}
	}

	return score;
}

function reset() {
	score = 0;
	round = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	current = 0;
}

module.exports = {
	bowl: bowl,
	getScore: getScore,
	reset: reset
}