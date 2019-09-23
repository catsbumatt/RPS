var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var userChoiceImg = document.getElementById("user-choice-img");
var compChoiceImg = document.getElementById("computer-choice-img");

function getComputerChoice(){
	// const choices = ['r', 'p', 's'];
	const ran = Math.random();	
	if (ran <= 0.33){
		//rock
		return 'r';
	}
	else if (ran < 0.66 && ran > 0.33){
		//paper
		return 'p';
	}
	else{
		//scissors
		return 's';
	}

}

function win(){
	userScore++;
	//show on page
	userScore_span.innerHTML = userScore;

	result_div.innerHTML = "YOU WIN";
	blink('blinkGreen');
	

}


function lose(){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = "You Lose";
	blink('blinkRed');

}

function blink(blinkClass){
	$(scoreBoard_div).toggleClass(blinkClass);
	setTimeout(function(){
		$(scoreBoard_div).toggleClass(blinkClass);	
	},100);
}

function draw(){
	result_div.innerHTML = "DRAW";
	
}

function game(userChoice){	

	const compchoice = getComputerChoice();


	changeUserImg(userChoice);
	changeCompImg(compchoice);


	const res = userChoice+compchoice;
	//User wins
	if (res == 'rs' || res == 'pr' || res == 'sp'){
		win();
	}
	//computer wins
	else if (res == 'rp' || res == 'ps' || res == 'sr'){
		lose()
	}
	//draw
	else{
		draw()
	}
}

function changeUserImg(userChoice){
	if (userChoice === 'r'){
		userChoiceImg.querySelector("img").src = 'images/rock.png';
	}
	else if (userChoice === 'p'){
		userChoiceImg.querySelector("img").src = 'images/paper.png';
	}
	else {
		userChoiceImg.querySelector("img").src = 'images/scissors.png';
	}
}



function changeCompImg(compChoice){
	if (compChoice === 'r'){
		compChoiceImg.querySelector("img").src = 'images/rock.png';
	}
	else if (compChoice === 'p'){
		compChoiceImg.querySelector("img").src = 'images/paper.png';
	}
	else{
		compChoiceImg.querySelector("img").src = 'images/scissors.png';
	}
}

function main (){
	rock_div.addEventListener('click', function(){
		game("r");	

	})

	paper_div.addEventListener('click', function(){
		game("p");
		
	})

	scissors_div.addEventListener('click', function(){
		game("s");
		
	})
}

main();