function messaggio(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("OK")
            //reject("Qualcosa è andato storto")
        },2000)
}
)};

async function ricezione() {
    try {
        let result = await messaggio()
            console.log("Messaggio ricevuto:", result)
    } catch (error) {
        console.error("Errore nella ricezione del messaggio:", error)
    }
}

ricezione()

