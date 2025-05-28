function controlloNumero() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(6); 
      }, 1000);
    });
  }
  
  controlloNumero()
    .then((numero) => {
        if (numero %2 === 0){
            return numero * 2;
        } else {
            return numero + 3
        }
    })
   
    .then((risultato) => {
      console.log("Il numero è:", risultato);
    });
  
  