function restituisciNumero() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(4); 
    }, 1000);
  });
}

restituisciNumero()
  .then((numero) => {
    return numero * 2;
  })
  .then((moltiplicato) => {
    return moltiplicato + 3;
  })
  .then((risultato) => {
    console.log("Il risultato è:", risultato);
  });

