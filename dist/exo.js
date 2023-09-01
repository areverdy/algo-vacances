"use strict";
//Ecrire une procédure qui cherche ce nombre aléatoire en affichant des messages du type "plus" ou "moins" à chaque fois qu'elle essaye de deviner le nombre.
// /La procédure prendra en paramètre le nombre à trouver et le nombre d'essais maximum.
// Si le nombre d'essais maximum est atteint, la procédure affichera un message du type "perdu".
// Sinon elle renverra le nombre trouvé et le nombre d'essai nécessaire pour le trouver.
var _a, _b;
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
// Créez un tableau d'élèves qui contient un nom aléatoire pour chaque élève.
const nomsPossibles = [
    "Amandine", "Benoit", "Cédric", "Dorian", "Emilie", "Fabien",
    "Géraldine", "Hélène", "Isabelle", "Jérôme", "Karine"
];
const classe = []; // Tableau pour stocker les noms des élèves
for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * nomsPossibles.length); // Choisit un index aléatoire dans le tableau de noms possibles
    const nomEleve = nomsPossibles[randomIndex]; // Récupère le nom à cet index
    classe.push(nomEleve); // Ajoute le nom à la classe
}
console.log(classe);
// Créez un tableau de notes qui contient une note aléatoire entre 0 et 20 pour chaque élève.
const notes = [];
for (let i = 0; i < classe.length; i++) {
    const nomEleve = classe[i];
    const note = Math.floor(Math.random() * 21); // Génère une note aléatoire entre 0 et 20
    notes.push({ nom: nomEleve, note: note }); // Ajoute le nom de l'élève et sa note au tableau
}
console.log(notes);
// Créez une procédure qui affiche le nom de l'élève et sa note.
let notes2;
function afficherNotes(noms, notes) {
}
console.log((_a = notes.at(0)) === null || _a === void 0 ? void 0 : _a.nom);
console.log((_b = notes.at(0)) === null || _b === void 0 ? void 0 : _b.note);
// Créez une procédure qui affiche un nom d'élève et la note moyenne des élèves qui portent ce prénom.
