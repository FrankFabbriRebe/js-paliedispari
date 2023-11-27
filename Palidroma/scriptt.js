/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//prompt user word
const userWord = prompt("Inserisci qui la parola da verificare")

// function to check is user word is palindroma
function checkPalindroma (userWord) {

    if (userWord === userWord.split('').reverse().join('')) {
        return true
    } else {
        return false
    }

}

// call function
const result = checkPalindroma(userWord);

// print the result in console
console.log(result);



