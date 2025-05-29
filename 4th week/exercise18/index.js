async function first(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La pistacchiosa") 
        },1000)
    })
}

async function second(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Una signora pizza") 
        },2000)
    })
}

async function showResult(){
    let result = await first()
    console.log(result)
    let result2 = await second()
    console.log(result2)
}

showResult()

