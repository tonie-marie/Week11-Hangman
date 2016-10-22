// *** WILL RANDOMLY SELECT A WORD ***
// copy pasting from week3 solution for reference

// word bank
var characters = ["bob", "linda", "tina", "gene", "louise", "gayle", "al", "gloria", "teddy", "mort", "ollie", "andy", "frond", "pesto", "courtney", "darryl", "millie", "tammy", "zeke", "fishoeder", "edith", "harold", "gretchen", "hugo", "ron", "jairo", "logan", "marshmallow", "mickey", "critter", "mudflap", "randy", "bosco"];

// word from list that user has to guess
var wordToGuess = "";

// randomly choose word from list
wordToGuess = characters[Math.floor(Math.random() * characters.length)];