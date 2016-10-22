// *** CONSTRUCTOR FILE - SHOULD CONTROL WHETHER OR NOT A LETTER APPEARS AS A "_" OR AS ITSELF ON SCREEN ***
// copy pasting from week3 solution for reference

// solution held here
var wordToGuess = "";

// this will break the solution into individual letters to be stored in array
var lettersInChosenWord = [];

// this will be the number of blanks we show based on the solution
var numBlanks = 0;

// holds a mix of blanks and solved letters
var blanksAndSuccesses = [];

// fill up the blanksAndSuccesses list with appropriate number of blanks
for (var i=0; i < numBlanks; i++) {
	blanksAndSuccesses.push("_");
}