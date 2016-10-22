// *** WILL CONTAIN THE LOGIC OF THE APP, RUNNING IT IN TERMAINL WILL START THE GAME ***
// *** The app should end when a player guesses the correct word or runs out of guesses ***
// copy pasting from week3 solution for reference

// npm inquirer to access user input
var inquirer = require('inquirer');

// require word.js to access data inside file
var characters = require("./word.js");

// require letter.js to access data inside file
var checkLetters = require("./letter.js");

// require game.js to access data inside file
var selectCharacter = require("./game.js");