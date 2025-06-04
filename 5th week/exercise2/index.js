function salvaDato(chiave, valore) {
    localStorage.setItem(chiave, valore);
    console.log("Valore salvato:", chiave, "=", valore);
  }
  
  function leggiDato(chiave) {
    const valore = localStorage.getItem(chiave);
    if (valore !== null) {
      console.log("Valore recuperato:", chiave, "=", valore);
    } else {
      console.log("Nessun valore trovato per la chiave:", chiave);
    }
    return valore;
  }
  
  function rimuoviDato(chiave) {
    localStorage.removeItem(chiave);
    console.log("Valore rimosso per la chiave:", chiave);
  }

  salvaDato("nome utente", "John Wick")
  leggiDato("nome utente")
  rimuoviDato("nome utente")