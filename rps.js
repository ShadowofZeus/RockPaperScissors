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
		//console.log('This is a tie amigos - shame');
		return 'draw';
	
	}

	else if ((playerSelection === 'rock') && (computerSelection === 'paper'))
	{
		//console.log('computer-amigo WINS!');
		return 'computer';
	}

	else if ((playerSelection === 'rock') && (computerSelection === 'scissors'))
	{
		//console.log('human-amigo WINS!');
		return 'human';
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'rock'))
	{
		//console.log('human-amigo WINS!');
		return 'human';
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'paper'))
	{
		//console.log('This is a tie amigos - shame');
		return 'draw';
	}

	else if ((playerSelection === 'paper') && (computerSelection === 'scissors'))
	{
		//console.log('computer-amigo WINS!');
		return 'computer';
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'rock'))
	{
		//console.log('computer-amigo WINS!');
		return 'computer';
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'paper'))
	{
		//console.log('human-amigo WINS!!');
		return 'human';
	}

	else if ((playerSelection === 'scissors') && (computerSelection === 'scissors'))
	{
		//console.log('This is a tie amigos - shame');
		return 'draw';
	}

	else 
	{
		console.log('Invalid input from one of you amigos, HOW DARE YOU!- bad face');
	}
}

function gameFive(rounds=5)
{
	let human = 0;
	let computer = 0;
	textArray = ['Round-1','Round-1','Round-1',];

	for(i=0; i<rounds; i++)
	{
		const value_comp = computerPlay();
		const value_human = String(prompt('Select either rock,paper or scissors please: '));   //making sure its a string
		const valueh_lower = value_human.toLowerCase();
		console.log(valueh_lower); 																//chekcing code credibility
		console.log(value_comp);																//chekcing code credibility
		billboard = OneRound(valueh_lower,value_comp);

		switch (billboard) 
		{
		  case 'draw':
		  	human++;
		  	computer++;
		  	console.log(`Round-${i+1} Results:`);
		    console.log(`Human: ${human} and Computer: ${computer}`);
		    break;
		  case 'computer':
		    computer++;
		    console.log(`Round-${i+1} Results:`);
		    console.log(`Human: ${human} and Computer: ${computer}`);
		    break;
		  case 'human':
		    human++;
		    console.log(`Round-${i+1} Results:`);
		    console.log(`Human: ${human} and Computer: ${computer}`);
		    break;
		   
		  default:
		    console.log('No one is winning today');
		    break;
		}
	}

	if(human>computer)
	{
		
		alert('Human is KING!!');
	}

	else if(computer>human)
	{
		
		alert('Computer is KING!!');
	}

	else
	{
		alert('No winner due to invalid input from users')
	}
}

//document.getElementById("begin").onclick = gameFive;

										




