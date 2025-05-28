function errorsCheck() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 100)); 
      }, 1000);
    });
  }
  
  errorsCheck()
    .then((num) => {
        if (num > 0 && num <= 50){
            return num;
        } else {
            throw new Error("The number must be lower than 50")
        }
    })
   
    .then((result) => {
      console.log("The number is:", result);
    })

    .catch((error) => console.error (error.message))
  