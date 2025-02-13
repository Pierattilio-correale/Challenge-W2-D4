/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  const areaRettangolo = l1 * l2;
  console.log(areaRettangolo);
};
area(10, 2);
area(20, 3);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  const sum = n1 + n2;
  if (n1 === n2) {
    return sum * 3;
  } else {
    return sum;
  }
};

let totalSum = crazySum(2, 3);
console.log(totalSum);
totalSum = crazySum(2, 2);
console.log(totalSum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (n1) {
  const diff = n1 - 19;
  if (n1 > 19) {
    return diff * 3;
  } else {
    return diff;
  }
};

let totalCrazyDiff = crazyDiff(17);
console.log(totalCrazyDiff);
totalCrazyDiff = crazyDiff(22);
console.log(totalCrazyDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
let boundaryVerification = boundary(100);
console.log(boundaryVerification);
boundaryVerification = boundary(400);
console.log(boundaryVerification);
boundaryVerification = boundary(10);
console.log(boundaryVerification);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (patata) {
  const strings = patata;
  if (patata === "EPICODE") {
    return strings;
  } else {
    return "EPICODE" + " " + strings;
  }
};
let theWordIs = epify("EPICODE");
console.log(theWordIs);
theWordIs = epify("miao");
console.log(theWordIs);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  if (n > 0 && n % 3 === 0) {
    console.log("Il numero è divisibile per 3");
  } else if (n > 0 && n % 7 === 0) {
    console.log("IL numero è divisibile per 7");
  } else {
    console.log(
      "Il numero non è divisibile per 3 o per 7 o è un numero negativo"
    );
  }
};

check3and7(14);
check3and7(9);
check3and7(1);
check3and7(-1);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(EPICODE) {
  return EPICODE.split("").reverse().join("");
}
const NewReversed = reverseString("EPICODE");
console.log(NewReversed);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(EPICODE) {
  return EPICODE.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const upperNewWord = upperFirst("ciao a tutti");
console.log(upperNewWord);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(name) {
  return name.slice(1, name.length - 1);
}
const newNameTwo = cutString("sciocco");
console.log(newNameTwo);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let randomNumbers = [];
  if (n < 11) {
    for (let i = 0; i < n; i++) {
      let randomNumber = Math.floor(Math.random() * 11);

      randomNumbers.push(randomNumber);
    }

    return randomNumbers;
  } else {
    console.log("array troppo lungo");
  }
}
const randomNumberss = giveMeRandom(10);
console.log(randomNumberss);
