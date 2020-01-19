function computerPlay()
{

   const cplay = Math.floor(Math.random() * Math.floor(3));

   switch (cplay) 
   {
	  case 0:
	    return 'rock';
	    break;
	  case 1:
	    return 'paper';
	    break;

	  case 2:
	    return 'scissors';
	    break;

	  default:
	    console.log('Invalid Inputrrock');
	    break;
	}

}

function OneRound(playerSelection,computerSelection)
{
	if ((playerSelection ==='rock') && (computerSelection === 'rock'))
	{
		console.log('This is a tie amigos - shame');
	}

	else if ((playerSelection === 'rock') && (computerSelection === 'paper'))
	{
		console.log('computer-amigo WINS!');
	}

	else if ((playerSelection === 'rock') && (computerSelection === 'scissors'))
	{
		console.log('human-amigo WINS!');
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'rock'))
	{
		console.log('human-amigo WINS!');
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'paper'))
	{
		console.log('This is a tie amigos - shame');
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'scissors'))
	{
		console.log('computer-amigo WINS!');
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'rock'))
	{
		console.log('computer-amigo WINS!');
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'paper'))
	{
		console.log('human-amigo WINS!!');
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'scissors'))
	{
		console.log('This is a tie amigos - shame');
	}

	else 
	{
		console.log('Invalid input from one of you amigos, HOW DARE YOU!- bad face');
	}
}

const value_comp = computerPlay();
const value_human = String(prompt('Select either rock,paper or scissors please: '));   //making sure its a string
const valueh_lower = value_human.toLowerCase();											//making sure it always a lower case.
console.log(valueh_lower); 																//chekcing code credibility
console.log(value_comp);																//chekcing code credibility

OneRound(valueh_lower,value_comp);

