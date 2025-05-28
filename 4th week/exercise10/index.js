function errorCheck() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            reject("Whops...Something went wrong")
        }, 1000)
    })
}

errorCheck()
    .catch(error => console.warn(error))

