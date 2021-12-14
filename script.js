//Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Usiamo i nuovi metodi degli array foreach o filter.

const numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const numberA = 4;
const numberB = 13;

const interni = numeri.filter ((numero) => {
    if (numero>=numberA && numero<=numberB) {
        return true;
    }
});

console.log(interni);