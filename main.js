// logic
let moves = ['rock', 'paper', 'scissors'];
// dynamic variables, updated in function
// reset to 0 when refreshed
let round = 0;
let totalScore = 0;
let wins = 0;
let losses = 0;
let draws = 0;
let messages = [
	'You won this round 🎉🎉',
	'You lost this round',
	'This round is a draw',
];
let outcome = '';

function getWinner() {
	let startGame = confirm('Do you want to play the game?');
	while (startGame) {
		let startRound = confirm(`Start a round?`);
		if (!startRound) {
			break;
		} else if (startRound) {
			// count which round the game is on
			round++;
			// ask player for their move
			let playerMove = prompt('What is your move? rock, paper, or scissors ?');
			// generate random computer move
			let computerMove = moves[Math.floor(Math.random() * moves.length)];
			// current round score
			let score = 0;

			if (playerMove === 'rock') {
				switch (computerMove) {
					case 'scissors':
						score = 1;
						wins++;
						break;
					case 'paper':
						score = -1;
						losses++;
						break;
					default:
						draws++;
				}
				totalScore += score;
			}
			if (playerMove === 'scissors') {
				switch (computerMove) {
					case 'paper':
						score = 1;
						wins++;
						break;
					case 'rock':
						score = -1;
						losses++;
						break;
					default:
						draws++;
				}
				totalScore += score;
			}
			if (playerMove === 'paper') {
				switch (computerMove) {
					case 'rock':
						score = 1;
						wins++;
						break;
					case 'scissors':
						score = -1;
						losses++;
						break;
					default:
						draws++;
				}
				totalScore += score;
			}

			switch (score) {
				case 1:
					outcome = messages[0];
					break;
				case -1:
					outcome = messages[1];
					break;
				case 0:
					outcome = messages[2];
			}

			alert(`RESULT OF THIS ROUND:
      ${outcome} 
      (You chose ${playerMove}, Computer chose ${computerMove})
      Current round score: ${score} 
      Total Score: ${totalScore} 
      Completed rounds: ${round}
      Wins: ${wins}
      Draws: ${draws}
      Losses: ${losses}`);
		}
	}
}

getWinner();

// console.log(getWinner());
