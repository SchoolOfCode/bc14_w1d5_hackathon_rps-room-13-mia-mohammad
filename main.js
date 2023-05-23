// logic
let moves = ['rock', 'paper', 'scissors', 'robot'];
// dynamic variables, updated in function
// reset to 0 when refreshed
let round = 0;
let totalScore = 0;
let wins = 0;
let losses = 0;
let draws = 0;

// messages array for each round
let messages = [
	'You won this round 🎉🎉',
	'You lost this round',
	'This round is a draw',
];

// check user starts with 1 capital letter, followed by 0-9 other letters
const userNameRegex = /^[A-Z]{1}[A-Za-z]{0,9}$/;
let checkUserName = '';
let outcome = '';

function getWinner() {
	// prompt to enter username
	let username = prompt(`Welcome to the rock, papers, scissors, robot game!
  Enter a username to start 🎲🎲
  Must start with a capital letter and be maximum 10 letters`);

	if (!username.match(userNameRegex)) {
		// make sure username matches requirements
		checkUserName = prompt(`Enter a valid username`);
		// while loop for valid username
		while (!checkUserName.match(userNameRegex)) {
			let reCheck = prompt(`Enter a valid username`);
			if (reCheck.match(userNameRegex)) {
				// end loop when a valid username is entered
				username = reCheck;
				break;
			}
		}
	}

	// ask if user wants to start game
	let startGame = confirm('Do you want to start a game?');

	while (startGame) {
		// ask to start a round
		let startRound = confirm(`Start a round?`);
		if (!startRound) {
			// end game if user chooses to cancel
			break;
		} else if (startRound) {
			// count which round the game is on
			round++;
			// ask player for their move
			let playerMove = prompt(
				`What is your move ${username}? Enter rock🪨, paper📄, scissors✂, or robot🤖?`
			);
			// generate random computer move
			let computerMove = moves[Math.floor(Math.random() * moves.length)];
			// current round score
			let score = 0;
			// LOGIC FOR EACH MOVE

			// outcomes if player chooses robot
			if (playerMove === 'robot') {
				switch (computerMove) {
					case 'scissors':
					case 'rock':
						score = -1;
						losses++;
						break;
					case 'paper':
						score = 1;
						wins++;
						break;
					default:
						score = 0;
						draws++;
				}
				totalScore += score;
			}

			// outcomes if player chooses rock
			if (playerMove === 'rock') {
				switch (computerMove) {
					case 'robot':
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

			// outcomes if player chooses scissors
			if (playerMove === 'scissors') {
				switch (computerMove) {
					case 'robot':
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

			// outcomes if player chooses paper
			if (playerMove === 'paper') {
				switch (computerMove) {
					case 'rock':
						score = 1;
						wins++;
						break;
					case 'robot':
					case 'scissors':
						score = -1;
						losses++;
						break;
					default:
						draws++;
				}
				totalScore += score;
			}

			// outcome from messages array based on each round's score
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

			// show results of each round
			// use the dynamic variables defined above
			alert(`RESULT OF THIS ROUND:
      username: ${username}
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

// call function when page is loaded to start the program
getWinner();
