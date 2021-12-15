//Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Usiamo i nuovi metodi degli array foreach o filter.

const object = ["ciao","cane","gatto","albero","farina","telefono","canguro","serpente","rana","abito","scarpe","scatola","pane","pc","router"];
const numberA = 4;
const numberB = 13;

function select (array, a, b) {
    const interni = array.filter ((object, index) => {        
        if (index>=a && index<=b) {
            return true;
        }
    });
    return interni;
}

let interni = select(object, numberA, numberB);
console.log(interni);