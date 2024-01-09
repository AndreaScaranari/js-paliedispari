// // * Palindroma
// // 1. Chiedere all’utente di inserire una parola (con un prompt)
// const userWord = prompt("Inserisci una parola per verificare che sia palindroma", "aerea");

// // 2. Creare una funzione per capire se la parola inserita è palindroma
// function isPalindroma(word) {
//     const splitWord = word.split("");
//     const reverseWord = splitWord.reverse();
//     const joinWord = reverseWord.join("");
//     return joinWord === word;
// }

// // 3. Stampiamo il risultato in console
// let message = "La parola inserita non è palindroma";
// if (isPalindroma(userWord) === true) {
//     message = "La parola inserita è palindroma";
// }
// console.log(message);

// // * Pari e Dispari
// // 1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. (con un prompt)
// const userChoice = prompt("Scegli se vuoi giocare con pari o dispari", "pari");
// const userNumber = prompt("Scegli un numero da 1 a 5", "4");

// // 2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
// function randomNumber () {
// const randomChoice = Math.floor(Math.random()*5)+1;
// return randomChoice;
// }

// // 3. Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// function isSumEven (num1, num2) {
//     const sumNumbers = num1 + num2;
//     const isEven = (sumNumbers % 2 === 0)
//     return isEven;
// }

// const finalResult = isSumEven (userNumber, randomNumber());

// // 4. Dichiariamo chi ha vinto in console.
// let message2 = "Though luck, PC Won!";
// if (finalResult && userChoice === "pari" || !finalResult && userChoice === "dispari") {
//     message2 = "Great job, You Won!"
// }
// console.log(message2);

// // * Bonus
// // 1. Raccogliere le informazioni dall'utente usando form, input, button in pagina invece che coi prompt.
// // 2. Stampare i risultati in pagina, invece che in console