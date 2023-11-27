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

// function to generate random number between min and max (both included)
function randomNumbMinMax (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

// call the function
let computerNumber = randomNumbMinMax(1, 5);
console.log("Il numero del computer è: " + computerNumber);

// total number
const totalNumber = userNumber + computerNumber;
console.log("Il totale è: " + totalNumber);

// function to check if total number is even or odd
function evenOrOdd (totalNumber) {
    if (totalNumber % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

// console.log(evenOrOdd(totalNumber));

// function to select the winner
/*
function whoWin (totalNumber, userChoice) {
    if (totalNumber % 2 === 0 && userChoice === "pari") {
         return "Congratulazioni hai vinto"
    } else if {

    }
}
*/