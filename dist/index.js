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
multiple(60);
