class Automobile {
    constructor(marca, modello, anno) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
    }
  }
  
 class Chilometraggio extends Automobile {
  chilometraggio = [];

  constructor(marca, modello, anno, chilometraggio) {
    super(marca, modello, anno);
    this.chilometraggio = chilometraggio;
  }
 }

 descrizione() {
  return `Automobile: ${this.marca} ${this.modello}, anno ${this.anno}`;
}

aggiungiChilometri(km) {
  if (km > 0) {
    this.chilometraggio += km;
  } else {
    console.log("Il numero di chilometri deve essere positivo.");
  }
}

mostraChilometraggio() {
  return `Chilometraggio attuale: ${this.chilometraggio} km`;
}


// Esempio di utilizzo
const miaAuto = new Automobile('Toyota', 'Corolla', 2020);
console.log(miaAuto.descrizione());                      // Output: Automobile: Toyota Corolla, anno 2020
miaAuto.aggiungiChilometri(150);
console.log(miaAuto.mostraChilometraggio());    