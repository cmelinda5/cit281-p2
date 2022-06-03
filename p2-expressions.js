/*
    CIT 281 Project 2
    Name: Melinda Chan
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(minLength, maxLength) {
    return Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomInteger(10, 20);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter();
}

console.log(getRandomString(10,20));

// Returns a random lowercase letter from a to z
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0, 25)];
}

// Returns a string of random lowercase letters from a to z with random length from 10 to 20 
function getRandomString(minLength, maxLength) {
    let output = ""
    for (let i = 0; i <= getRandomInteger(minLength, maxLength); i++) {
        output += getRandomLetter();
    }
    return output;
}

// getSortedString returns a string in ascending order
//  * .split splits string by each of it's characters into an array
//  * .sort sorts array default order is ascending
//  * .join joins the array by an empty string and removes the commas 
function getSortedString(string) { 
    return string.split("").sort().join("");
}

// P2 Expressions
// * const varName = function() { }

const getRandomInteger = function (minLength, maxLength) {
    return Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
}

const getRandomLetter = function () {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0, 25)];
}

const getRandomString = function (minLength, maxLength) {
    let output = ""
    for (let i = 0; i <= getRandomInteger(minLength, maxLength); i++) {
        output += getRandomLetter();
    }
    return output;
}

const getSortedString = function (string) {
    return string.split("").sort().join("");
}
