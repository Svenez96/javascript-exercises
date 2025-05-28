function funzioneRisolta(messaggio){
    return new Promise ((resolve, reject) => {
        resolve (`Successo: ${messaggio}`)
    })
}
function altraFunzioneRisolta(messaggio){
    return new Promise ((resolve, reject) => {
        resolve (`Successo: ${messaggio}`)
    })
}
function funzioneRifiutata(messaggio){
    return new Promise ((resolve, reject) => {
        reject (`Errore: ${messaggio}`)
    })
}

Promise.allSettled([
    funzioneRisolta("Operazione 1 completata!"), 
    altraFunzioneRisolta("Operazione 2 completata!"), 
    funzioneRifiutata("Operazione 3 fallita.")
])
.then(risultato => {
    console.log("Risultati di tutte le promesse:");
    console.log(risultato);
});
