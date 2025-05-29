async function messaggio(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("OK")
        },2000)
}
)};

let result = await messaggio()

console.log(result)

