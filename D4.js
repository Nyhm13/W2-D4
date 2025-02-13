/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const areaRettangolo = l1 * l2;
  console.log(areaRettangolo);
  return areaRettangolo;
};
area(2, 4);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (nr1, nr2) {
  if (nr1 === nr2) {
    return (nr1 + nr2) * 3;
  } else {
    return nr1 + nr2;
  }
};
crazySum(2, 3);
console.log(crazySum(2, 3));
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (nr1) {
  if (nr1 < 19) {
    return Math.abs(nr1 - 19);
  } else return Math.abs((nr1 - 19) * 3);
};
console.log(crazyDiff(10));
console.log(crazyDiff(59));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  return (n > 20 && n < 100) || n === 400;
};
console.log(boundary(2));
console.log(boundary(400));
console.log(boundary(50));
console.log(boundary(99));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (parola) {
  if (parola.startsWith("EPICODE")) {
    return parola;
  } else {
    return "EPICODE " + parola;
  }
};
console.log(epify("EPICODE"));
console.log(epify("Stefano"));
console.log(epify("Ioan"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  return n > 0 && (n % 3 === 0 || n % 7 === 0);
};
console.log(check3and7(21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (parola) {
  return parola.split("").reverse(1, 5).join("");
};

console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
  return str
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};
console.log(upperFirst("ciao ragazzi come state"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
 */
const cutString = function (parola) {
  return parola.substring(1,8);
};
console.log(cutString("Salutiamo"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom=function(n){
    return 
}

/* SCRIVI QUI LA TUA RISPOSTA */
