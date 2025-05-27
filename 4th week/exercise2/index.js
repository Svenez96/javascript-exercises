function operazione (valore1 ,valore2, callback ) {
    const risultato = valore1 - valore2;
    callback(risultato);
};

function mostraRisultato (valore){
    console.log("Il risultato è:", valore)
};

operazione(10, 5, mostraRisultato)