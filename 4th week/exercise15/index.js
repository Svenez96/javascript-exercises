function funzioneRisolta(){
    return new Promise ((resolve, reject) => {
        resolve ("Funzione risolta!")
    })
}
function altraFunzioneRisolta(){
    return new Promise ((resolve, reject) => {
        resolve ("Funzione risolta!!")
    })
}
function funzioneRifiutata(){
    return new Promise ((resolve, reject) => {
        reject ("Funzione rifiutata..")
    })
}

Promise.allSettled([funzioneRisolta(), altraFunzioneRisolta(), funzioneRifiutata()])
.then(risultato => {
    console.log("Risultati di tutte le promesse:");
    console.log(risultato);
});
