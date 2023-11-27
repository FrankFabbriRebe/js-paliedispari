/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// promt user number
const userNumber = parseInt(prompt("Inserisci il tuo numero da 1 a 5"));
console.log("Il tuo numero è: "  + userNumber);

// prompt user choice
const userChoice = prompt("Scrivi pari o dispari?");
console.log("La tua scelta è: " + userChoice);

// call the function to generate random number between min and max (both included)
let computerNumber = randomNumbMinMax(1, 5);
console.log("Il numero del computer è: " + computerNumber);

// total number
const totalNumber = userNumber + computerNumber;
console.log("Il totale è: " + totalNumber);

// call the function to check if total number is even or odd
const totalNumberValue = pariODispari(totalNumber);
console.log("La somma è: " + totalNumberValue);

// call the function to get the winner
const result = whoWhin(userChoice, totalNumberValue);

// print the result
console.log(result);


// FUNCTIONS

// function to generate random number between min and max (both included)
function randomNumbMinMax (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

// function to check if total number is even or odd
function pariODispari (totalNumber) {
    if (totalNumber % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

// function to get the winner
function whoWhin(userChoice, totalNumberValue) {
    if (userChoice === totalNumberValue) {
        return "Congratulazioni, hai vinto!";
    } else {
        return "Mi dispiace, hai perso!";
    }
}
