//logic
let moves = ['rock', 'paper', 'scissors'];

let games = 0;
let totalScore = 0;
// console.log(playerMove);
// console.log(computerMove);

let startGame = confirm('Do you want to play the game?');
while (startGame) {
	let playerMove = prompt('What is your move? rock, paper, or scissors ?');

	function getWinner() {
		let computerMove = moves[Math.floor(Math.random() * moves.length)];
		let score = 0;
		if (playerMove === 'rock') {
			switch (computerMove) {
				case 'scissors':
					score = 1;
					break;
				case 'paper':
					score = -1;
			}
			totalScore += score;
		}
		if (playerMove === 'scissors') {
			switch (computerMove) {
				case 'paper':
					score = 1;
					break;
				case 'rock':
					score = -1;
			}
			totalScore += score;
		}
		if (playerMove === 'paper') {
			switch (computerMove) {
				case 'rock':
					score = 1;
					break;
				case 'scissors':
					score = -1;
			}
			totalScore += score;
		}
		alert(`Current round score: ${score} Total Score: ${totalScore}`);
	}

	getWinner();
	games++;
}
// console.log(getWinner());
