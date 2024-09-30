// Selfwork Operatori 2
// Crea due variabili contenenti l’anno corrente e l’anno di nascita di una persona. Crea un programma che calcoli:

//     l’eta' della persona
//     quanti anni sono necessari per raggiungere i 100


// In console poi mostra la frase “Hai tot anni e ti mancano tot anni per compierne 100“.


let nome="Roberto";
let anno_di_nascita=1976;
let anno_corrente=2024;

let eta = anno_corrente - anno_di_nascita;

console.log("Roberto ha adesso "+ eta +" anni");

let cento_anni = 100 - eta;

console.log("A Roberto mancano ancora "+cento_anni +" per arrivare a 100 anni");


