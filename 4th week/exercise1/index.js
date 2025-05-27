function eseguiOperazione (valore1, valore2, operazione) {
    return operazione (valore1, valore2)
};

function somma (x, y){
    return x + y
};

let risultato = eseguiOperazione (5, 8, somma);
console.log(risultato);