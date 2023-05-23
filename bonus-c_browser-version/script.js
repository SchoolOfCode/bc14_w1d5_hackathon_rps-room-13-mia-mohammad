const options = ['rock', 'paper', 'scissors'];
const computerChoice = '';

function computerPlay() {
	/*
  TODO: Insert your code for your function that randomly generates a computer move here (from task 4). 
  
  This function should use the return keyword to return a string of either "rock", "paper", or "scissors".
  */
	return options[Math.floor(Math.random() * options.length)];
}
let message = '';
function playRound(playerSelection, computerSelection) {
	/*
  TODO: Insert your code for your function that decides who the winner is here (from task 2). 

  This function should take in two moves (the player's move and the computer's move) and return a string with the game result.

  For example, if the player's move is rock and the computer's move is scissors, the function should use the return keyword to return "You win!"
  */
	// outcomes if player chooses rock
	if (playerSelection === 'rock') {
		switch (computerSelection) {
			case 'scissors':
				message = 'You win!';
				break;
			case 'paper':
				message = 'You lose!';
				break;
			default:
				message = 'Draw';
		}
	}

	// outcomes if player chooses scissors
	if (playerSelection === 'scissors') {
		switch (computerSelection) {
			case 'paper':
				message = 'You win!';
				break;
			case 'rock':
				message = 'You lose!';
				break;
			default:
				message = 'Draw';
		}
	}

	// outcomes if player chooses paper
	if (playerSelection === 'paper') {
		switch (computerSelection) {
			case 'rock':
				message = 'You win!';
				break;
			case 'scissors':
				message = 'You lose!';
				break;
			default:
				message = 'Draw';
		}
	}
	return message;
}
function updateResultText(result) {
	const resultText = document.getElementById('result-text');
	resultText.textContent = result;
}
function handleClick(event) {
	const playerSelection = event.target.id;
	const computerSelection = computerPlay();
	const result = playRound(playerSelection, computerSelection);
	updateResultText(result);
}
const buttons = document.querySelectorAll('.game-options button');
buttons.forEach(button => {
	button.addEventListener('click', handleClick);
});
