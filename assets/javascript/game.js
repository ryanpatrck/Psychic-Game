//Letter variables available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];
//Setting all counters to zero
var Wins = 0;
var Losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessesSoFar = []; //array to push users choices to
var Guessedletter= null;

// Computer selects a random number from the variable letter
var computerGuess = computerChoices[Math.floor(Math.random() *computerChoices.length)];

// Allows the user to guess nine times
var refreshGuessesLeft = function() {
    //Grapping the HTML element and setting it equal to the guessesLeft variable
    document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

var refreshLetterToGuess = function( ){
    this.Gussedletter = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var refreshGuessesSoFar = function() {
    // Guesses the user has tried 
    document.querySelector('#Let').innerHTML = "Your Guesses so far: " + guessesSoFar.join(',');
    
};

//Function to reset everything

var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessesSoFar = [];

    refreshLetterToGuess();
    refreshGuessesLeft();
    refreshGuessesLeft();
}

//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
   guessesSoFar.push(userGuess);
   refreshGuessesLeft();
   refreshGuessesSoFar();

   if (guessesLeft > 0) {
    //updates the wins counter
    if (userGuess == Guessedletter){
        Wins++;
        document.querySelector('#Wins').innerHTML ="wins: " + Wins;
        reset();
    }
} else if(guessesLeft == 0) {
     //updates the loss counter
     Losses++;
     document.querySelector('#Losses').innerHTML = "Losses: " + Losses;
     //Reset the counter
     reset();

}

};