// *** CONSTRUCTOR FILE - CONTAIN ALL THE METHODS WHICH WILL CHECK THE LETTERS GUESSED VERSUS THE RANDOM WORD SELECTED ***
// copy pasting from week3 solution for reference

// require letter.js to access data inside file
var checkLetters = require("./letter.js");

// this boolean will be toggled based on whether or not a user letter is found anywhere in the word
var letterInWord = false;

// check if a letter exists insdie the array at all
for (var i=0; i < numBlanks; i++) {
	if (wordToGuess[i] == letter) {
		// if the letter exists then toggle this boolean to true
		letterInWord = true;
	}
}

// If the letter exists somewhere in the word, then figure out exactly where (which indices)
	if(letterInWord){
	
		// loop through the word 
		for (var i=0; i<numBlanks; i++){

			// Populate the blanksAndSuccesses with every instance of the letter.
			if(wordToGuess[i] == letter) {
				// here we set the specific space in blanks and letter equal to the letter when there is a match.
				blanksAndSuccesses[i] = letter;
			}
		}
		// logging for testing
		console.log(blanksAndSuccesses);
	}
	// If the letter doesn't exist at all...
	else {
		// then we add the letter to the list of wrong letters
		wrongGuesses.push(letter);
		// and we subtract one of the guesses
		numGuesses--;
	}