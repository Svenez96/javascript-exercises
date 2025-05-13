class Automobile {
  marca = "";
  modello = "";
  anno = 0;
  chilometraggio = 0;

  constructor(marca, modello, anno, chilometraggio) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }

  aggiungiChilometri(km) {
    if (km > 0) {
      this.chilometraggio += km;
    } else {
      console.log("inserire un valore d'incremento");
    }
  }

  mostraChilometraggio() {
    return (`Questa è una ${this.marca} ${this.modello} del ${this.anno}. Chilometraggio attuale: ${this.chilometraggio} km`)
  }
}


const subaruBaracca = new Automobile("Subaru", "Baracca", 1999, 0);
subaruBaracca.aggiungiChilometri(150);
console.log(subaruBaracca.mostraChilometraggio());