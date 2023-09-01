"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function multiple(number) {
    for (let i = 0; i <= number; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(i + " FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log(i + " Buzz");
        }
        else if (i % 3 === 0) {
            console.log(i + " Fizz");
        }
    }
}
// multiple(30)
function trouverjour(jour, mois, annee) {
    const joursemaine = [
        'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'
    ];
    let z = 0;
    let D = 0;
    if (mois >= 3) {
        z = annee;
        D = ((Math.trunc(23 * mois) / 9) + jour + 4 + annee + (Math.trunc(z / 4)) - (Math.trunc(z / 100)) + (Math.trunc(z / 400)) - 2) % 7;
    }
    else {
        z = annee - 1;
        D = ((Math.trunc(23 * mois) / 9) + jour + 4 + annee + (Math.trunc(z / 4)) - (Math.trunc(z / 100)) + (Math.trunc(z / 400))) % 7;
    }
    console.log(Math.trunc(D));
    console.log(joursemaine[Math.trunc(D)]);
}
trouverjour(18, 2, 2023);
let entier1 = 10;
let entier2 = 20;
let entier3 = 30;
function trouverPlusGrand(entier1, entier2, entier3) {
    if (entier1 > entier2 && entier1 > entier3) {
        return (entier1);
    }
    else if (entier2 > entier3 && entier2 > entier1) {
        return (entier2);
    }
    else if (entier3 > entier2 && entier3 > entier1) {
        return (entier3);
    }
    return (0);
}
const plusGrand = trouverPlusGrand(entier1, entier2, entier3);
console.log("Le plus grand entier est : " + plusGrand);
