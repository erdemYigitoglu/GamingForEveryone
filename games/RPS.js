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
		return alert(`This time is a draw. You  chose ${playerChoice} and computer chose ${computerChoice}`)
	} else if ((playerChoice === "rock") & (computerChoice === "scissors")) {
		return alert(`you won. ${playerChoice} bits ${computerChoice}.`);
	} else if ((playerChoice === "rock") & (computerChoice === "paper")) {
		return alert(`sorry ${computerChoice} bits ${playerChoice}`)
	} else if ((playerChoice === "paper") & (computerChoice === "rock")) {
		return alert(`you won. ${playerChoice} bits ${computerChoice}`)
	} else if ((playerChoice === "paper") & (computerChoice === "scissors")) {
		return alert(`sorry ${computerChoice} bits ${playerChoice}`)
	} else {
		return alert(`something is wrong. ${playerChoice} and ${computerChoice} doesn't work`)
	}};

	  start.addEventListener("click", playOneRound);