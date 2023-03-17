//logic
let moves = ['rock', 'paper', 'scissors'];

let score = 0;
// console.log(playerMove);
// console.log(computerMove);

let playerMove = prompt('What is your move? rock, paper, or scissors ?');

let computerMove = 'paper';

function getWinner(playerMove, player2) {
	let score = 0;
	if (playerMove === 'rock') {
		switch (player2) {
			case 'scissors':
				score = 1;
				break;
			case 'paper':
				score = -1;
		}
	}
	if (playerMove === 'scissors') {
		switch (player2) {
			case 'paper':
				score = 1;
				break;
			case 'rock':
				score = -1;
		}
	}
	if (playerMove === 'paper') {
		switch (player2) {
			case 'rock':
				score = 1;
				break;
			case 'scissors':
				score = -1;
		}
	}

	return score;
}

console.log(getWinner(playerMove, 'rock'));
