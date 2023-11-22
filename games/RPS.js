const start = document.querySelector("#start");
function chooseForComputer() {
	const choices= ["rock", "paper", "scissors"];
	const index = Math.floor(Math.random()*3);
	return choices[index];
}
function playOneRound() {
	let playerChoice= prompt("what is your choice").toLowerCase();
	let computerChoice = chooseForComputer();
	if (playerChoice == computerChoice) {
		alert(`This time is a draw. You  chose ${playerChoice} and computer chose ${computerChoice}. Current score is ${playerScore} versus ${computerScore}`)
	} else if ((playerChoice === "rock") & (computerChoice === "scissors")) {
		playerScore ++
		alert(`you won. ${playerChoice} bits ${computerChoice}. score is ${playerScore} versus ${computerScore}`); 
	} else if ((playerChoice === "rock") & (computerChoice === "paper")) {
		computerScore ++
		alert(`sorry ${computerChoice} bits ${playerChoice} current score is ${playerScore} versus ${computerScore}`)
	} else if ((playerChoice === "paper") & (computerChoice === "rock")) {
		playerScore ++
		alert(`you won. ${playerChoice} bits ${computerChoice} current score is ${playerScore} versus ${computerScore}`)
	} else if ((playerChoice === "paper") & (computerChoice === "scissors")) {
		computerScore ++
		alert(`sorry ${computerChoice} bits ${playerChoice}. Current score is ${playerScore} versus ${computerScore}.`)
	} else if ((playerChoice === "scissors") & (computerChoice === "paper")) {
		playerScore ++;
		alert(`you won ${playerChoice} bits ${computerChoice}. current score is ${playerScore} versus ${computerScore}`);
	} else if ((playerChoice === "scissors") & (computerChoice === "rock")) {
		computerScore ++;
		alert(`you lost. ${playerChoice} is beaten by ${computerChoice}. Current score is ${playerScore} versus ${computerScore}`)
	} else {
		alert(`something is wrong. ${playerChoice} and ${computerChoice} doesn't work`)
	}
return [playerScore, computerScore];
};
function play() {
	playerScore = 0;
	computerScore = 0
	while ((playerScore  < 5) & (computerScore < 5)) {
		playOneRound();
	}
	alert(`game is over. Current score is ${playerScore} versus ${computerScore}.`);
	}
start.addEventListener("click", play);
