let parole = [];

for (let i = 0; i < 5; i++) { 
   let word = prompt('inserisci una parola');
   parole.push(word);
}

for (let i = 0; i < 5; i++) {
   if (parole[i].length %2 !== 0){
      console.log(parole[i])
   }
}

