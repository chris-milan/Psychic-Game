console.log('hello')

//Main Variables

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

//var alphabet = ['Q', 'W', 'E']; // Saved to Test Win Condition

var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//Returns Values to HTML document
document.getElementById("Wins").innerHTML = 0;
document.getElementById("Losses").innerHTML = 0;
document.getElementById("Guesses").innerHTML = 9;
document.getElementById("SoFar").innerHTML = "None";

//Start of Main Function
document.addEventListener("keydown", function (event) {
    
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    //random CPU choice
    console.log('Computer picked ' + computerChoice);
    
    var playerChoice = event.key.toUpperCase();
    //player's keypress
    console.log('You picked ' + playerChoice);
    
    guesses.push('  ' + playerChoice + '  ');
    //pushes playerChoice into guesses array
       
if (playerChoice === computerChoice) {
    wins++;
    guessesLeft = 9;
    guesses = [];
    alert('You win!');
    console.log('You win!');
    document.getElementById("Wins").innerHTML = wins;
    } 
    
else if (guessesLeft === 1) {
    losses++;
    guessesLeft = 9;
    guesses = [];
    alert ('You lose!');
    console.log('You lose!');
    document.getElementById("Losses").innerHTML = losses;
    }
    
else if (computerChoice !== playerChoice) {
    guessesLeft--;
    console.log('Wins = ' + wins);
    console.log('Losses = ' + losses);
    console.log('You have ' + guessesLeft + ' guesses left!');
    }
    document.getElementById("Guesses").innerHTML = guessesLeft;
    document.getElementById("SoFar").innerHTML = guesses;
    }
)

/* SAVED CODE FOR POSSIBLE USE
char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
*/
