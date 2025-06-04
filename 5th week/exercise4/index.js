function salvaDato(chiave, valore) {
    localStorage.setItem(chiave, valore);
    sessionStorage.setItem(chiave, valore);
    console.log("Valore salvato in local storage:", chiave, "=", valore);
    console.log("Valore salvato in session storage:", chiave, "=", valore);
  }
  
  function leggiDato(chiave) {
    const localValue = localStorage.getItem(chiave);
    const sessionValue = sessionStorage.getItem(chiave);

    if (localValue !== null) {
      console.log("Valore recuperato in local storage:", chiave, "=", localValue);
    } else {
      console.log("Nessun valore trovato in local storage per la chiave:", chiave);
    }

    if (sessionValue !== null) {
      console.log("Valore recuperato in session storage:", chiave, "=", sessionValue);
    } else {
      console.log("Nessun valore trovato in session storage per la chiave:", chiave);
    }
    
    return {
        valore1: localValue,
        valore2: sessionValue
    }
}

  function rimuoviDato(chiave) {
    localStorage.removeItem(chiave)
    sessionStorage.removeItem(chiave);
    console.log("Valore rimosso in local storage per la chiave:", chiave);
    console.log("Valore rimosso in session storage per la chiave:", chiave);
  }

  salvaDato("username", "Frigobar")
  leggiDato("username")
  rimuoviDato("username")