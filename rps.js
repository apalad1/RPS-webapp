let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


main();

function main(){
	
	rock_div.addEventListener('click', function(){
		game("rock");
	})

	paper_div.addEventListener('click', function(){
		game("paper");
	})

	scissors_div.addEventListener('click', function(){
		game("scissors");
	})

}
//click your choice, the comp choice is randomized
//switch case takes in your choice then another switch on comp 
//choice for comparison
function game(userChoice){
	const compChoice = getCompChoice();
	switch(userChoice){
		case "rock":
			switch(compChoice){
				case "rock":
					tie(userChoice, compChoice);
					break;
				case "paper":
					lose(userChoice, compChoice);
					break;
				case "scissors":
					win(userChoice, compChoice);
					break;
			}
			break;
		case "paper":
			switch(compChoice){
				case "rock":
					win(userChoice, compChoice);
					break;
				case "paper":
					tie(userChoice, compChoice);
					break;
				case "scissors":
					lose(userChoice, compChoice);
					break;
			}
			break;
		case "scissors":
			switch(compChoice){
				case "rock":
					lose(userChoice, compChoice);
					break;
				case "paper":
					win(userChoice, compChoice);
					break;
				case "scissors":
					tie(userChoice, compChoice);
					break;
			}
			break;
		default:
	}
}
//3 choices, math floor/random gets 0, 1, 2 to alternate on 
//the choices above  
function getCompChoice(){
	const choices = ['rock', 'paper', 'scissors'];
	const rand = Math.floor(Math.random()*3);
	return choices[rand];
}

function win(userChoice, compChoice){
	console.log("win");
	userScore++;
	userScore_span.innerHTML = userScore; //.innerhtml updates the page
	compScore_span.innerHTML = compScore;
	
	result_div.innerHTML = "Your " + userChoice + " vs their " + compChoice + "! You Win!";
}
function tie(userChoice, compChoice){
	result_div.innerHTML = "tie";
	console.log("tie");
}
function lose(userChoice, compChoice){
	console.log("lose");
	compScore++;
	userScore_span.innerHTML = userScore; 
	compScore_span.innerHTML = compScore;
	
	result_div.innerHTML = "Your " + userChoice + " vs their " + compChoice + "! You Lose!";
}

