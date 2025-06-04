function salvaDato(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log("Valore salvato:", chiave, "=", valore);
  }
  
  function leggiDato(chiave) {
    const valore = sessionStorage.getItem(chiave);
    if (valore !== null) {
      console.log("Valore recuperato:", chiave, "=", valore);
    } else {
      console.log("Nessun valore trovato per la chiave:", chiave);
    }
    return valore;
  }
  
  function rimuoviDato(chiave) {
    sessionStorage.removeItem(chiave);
    console.log("Valore rimosso per la chiave:", chiave);
  }

  salvaDato("pizza preferita", "diavola")
  leggiDato("pizza preferita")
  rimuoviDato("pizza preferita")