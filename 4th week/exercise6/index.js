let verification = true

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (verification){
            resolve("Access Granted") 
        } else {
            reject("Access Denied")
        } 
        
    }, 2000)
});

promise
.then(result => console.log(result))
.catch(error => console.log(error))
.finally(() => console.log("Welcome"))