let promise = new Promise(function(resolve, reject){
    setInterval(() => resolve("John Wick"),2000) 
})

promise.then(result => console.log(result))

