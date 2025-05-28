function avviaSpedizione() {
    return new Promise((consegna, smarrimento) => {
        let paccoTracciato = false
        setTimeout(() => {
            if (paccoTracciato) {
                consegna("Pacco consegnato con successo")
            } else {
                smarrimento("Pacco smarrito durante il trasporto")
            }
        }, 1000)
    })
}

avviaSpedizione()
    .then(result => console.log(result))
    .catch(error => console.warn(error))

