/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// promt user number
const userNumber = prompt("Inserisci il tuo numero da 1 a 5");

// prompt user choice
const userhoice = prompt("Scrivi pari o dispari?");

// function to generate random number between min and max (both included)
function randomNumbMinMax (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

// call the function
let computerNumber = randomNumbMinMax(1, 5);

// total number

// function to select the winner
