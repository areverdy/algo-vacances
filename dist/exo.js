"use strict";
//Ecrire une procédure qui cherche ce nombre aléatoire en affichant des messages du type "plus" ou "moins" à chaque fois qu'elle essaye de deviner le nombre.
// /La procédure prendra en paramètre le nombre à trouver et le nombre d'essais maximum.
// Si le nombre d'essais maximum est atteint, la procédure affichera un message du type "perdu".
// Sinon elle renverra le nombre trouvé et le nombre d'essai nécessaire pour le trouver.
function guessRandomNumber(targetNumber, maxAttempts) {
    let attempts = 0;
    let lowerBound = 0;
    let upperBound = 100;
    while (attempts < maxAttempts) {
        const guess = Math.floor(Math.random() * 101); // Génère un nombre aléatoire entre 0 et 100
        if (guess === targetNumber) {
            return [guess, attempts + 1, 'trouvé'];
        }
        else if (guess < targetNumber) {
            lowerBound = guess + 1;
            console.log(`Essai ${attempts + 1}: plus`);
        }
        else {
            upperBound = guess - 1;
            console.log(`Essai ${attempts + 1}: moins`);
        }
        attempts++;
    }
    return [null, attempts, 'perdu'];
}
const targetNumber = Math.floor(Math.random() * 101); // Génère un nombre aléatoire entre 0 et 100
const maxAttempts = 10;
const [foundNumber, attempts, result] = guessRandomNumber(targetNumber, maxAttempts);
if (result === 'trouvé') {
    console.log(`Nombre trouvé : ${foundNumber} en ${attempts} essais.`);
}
else {
    console.log(`Le nombre n'a pas été trouvé en ${attempts} essais. ${result}`);
}
