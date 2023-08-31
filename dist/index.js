"use strict";
var _a, _b;
console.log('exo.algo');
// Ecrire une fonction qui prend un nombre en paramètre et qui retourne sa factorielle.
// function factorielle(number:number) {
// let variable = 1;
// for(let i=1; i <= number; i++) {
// (variable *= i)
// }
// console.log(variable)
// return variable
// }
// factorielle(7);
// Ecrire une fonction qui retourne un nombre aléatoire entre 0 et 100.
// function getRandomNumber(): number {
// return Math.floor(Math.random() * 101); // Génère un nombre entre 0 (inclus) et 100 (inclus)
//   }
//   const randomNumber = getRandomNumber();
//   console.log(randomNumber);
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
const notes = [];
for (let i = 0; i < 11; i++) {
    const nomEleve = nomsPossibles[i];
    const note = Math.floor(Math.random() * 21); // Génère une note aléatoire entre 0 et 20
    notes.push({ nom: nomEleve, note: note }); // Ajoute le nom de l'élève et sa note au tableau
}
console.log(notes);
let notes2;
function afficherNotes(noms, notes) {
}
console.log((_a = notes.at(0)) === null || _a === void 0 ? void 0 : _a.nom);
console.log((_b = notes.at(0)) === null || _b === void 0 ? void 0 : _b.note);
