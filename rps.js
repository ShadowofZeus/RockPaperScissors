
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const startbtn =document.getElementById("startbutton");
const resetbtn = document.getElementById('resetbtn');
const scoreVar = document.getElementsByTagName('p');
//const computerchoice = document.getElementsByTagName('p');
const ladder = document.getElementById('leaderboard');
const fresult = document.createElement('p');
let humanscore =0;
let compscore =0;
ladder.appendChild(fresult);
let imgcounter = 0;
let imageArray = [];
let slidetime = 3000;

//list of my images
imageArray = ['rock-1.jpeg','paper2.jpeg','scissors-3.png'];

//function for my slideshow
function slideshow()
{
	document.slideshow.src = imageArray[imgcounter];

	if(imgcounter<imageArray.length-1)
	{
		imgcounter++;
		//console.log(imageArray);
	}
	else
	{
		imgcounter=0;
	}
	setTimeout("slideshow()",slidetime);

	//initialiseEventListeners();
}

function startGame()
{
	alert('Computer has played. Please select your choice:');
	//console.log('Im stuck here!');
	//OneRound(humanchoice[5].textContent,computerchoice[3].textContent);
}

rock.addEventListener('click', (e) => {			//if rock is clicked - input rock in function + computers choice!
	e.stopPropagation()
	OneRound('rock',computerPlay());
});

paper.addEventListener('click', (e) => {
	e.stopPropagation()
	OneRound('paper',computerPlay());
});

scissors.addEventListener('click', (e) => {
	e.stopPropagation()
	OneRound('scissors',computerPlay());
});

startbtn.addEventListener('click', (e) => {
	e.stopPropagation()
	startGame();
});

resetbtn.addEventListener('click', (e) => {
	e.stopPropagation()
	resetScores();
});


function computerPlay()
{
	const compchoice = document.getElementsByTagName('p');
	//compchoice[].textContent = '';
   	const cplay = Math.floor(Math.random() * Math.floor(3));

   switch (cplay) 
   {
	  case 0:
	    return 'rock';
	    break;
	  case 1:
	    return 'paper';;
	    break;

	  case 2:
	    return 'scissors';;
	    break;

	  default:
	    console.log('Invalid Input!');
	    break;
	}

}

function writeUp()
{
	//scoreVar[3] is computer
	//scoreVar[5] is human
	//console.log(compscore,humanscore);
	//console.log(typeof humanscore);
	scoreVar[3].textContent = `${compscore}`;
	scoreVar[5].textContent = `${humanscore}`;

}

function OneRound(playerSelection,computerSelection)
{
	console.log(playerSelection,computerSelection);
	//alert("called with " + playerSelection + " and " + computerSelection);
	if ((playerSelection ==='rock') && (computerSelection === 'rock'))
	{
		fresult.textContent = 'This is a tie amigos - shame';
		compscore++,humanscore++;
		writeUp();
	
	}

	else if ((playerSelection === 'rock') && (computerSelection === 'paper'))
	{
		fresult.textContent = 'computer-amigo WINS!';
		compscore++;
		writeUp();
	}

	else if ((playerSelection === 'rock') && (computerSelection === 'scissors'))
	{
		fresult.textContent ='human-amigo WINS!';
		humanscore++;
		writeUp();
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'rock'))
	{
		fresult.textContent ='human-amigo WINS!';
		humanscore++;
		writeUp();
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'paper'))
	{
		fresult.textContent ='This is a tie amigos - shame';
		compscore++,humanscore++;
		writeUp();
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'scissors'))
	{
		fresult.textContent ='computer-amigo WINS!';
		compscore++;
		writeUp();
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'rock'))
	{
		fresult.textContent ='computer-amigo WINS!';
		compscore++;
		writeUp();
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'paper'))
	{
		fresult.textContent ='human-amigo WINS!!';
		humanscore++;
		writeUp();
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'scissors'))
	{
		fresult.textContent ='This is a tie amigos - shame';
		compscore++,humanscore++;
		writeUp();
	}

	else 
	{
		console.log('Invalid input from one of you amigos, HOW DARE YOU!- bad face');
	}
}

function resetScores()
{
	humanscore=0;
	compscore=0;
	writeUp();
	fresult.textContent = 'Game scores have been reset';
	console.log(humanscore,compscore);
}


window.onload = slideshow();


										





										




