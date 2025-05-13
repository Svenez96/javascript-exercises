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

  description(){
    return `Questa è una ${this.marca} ${this.modello} del ${this.anno}`;
  }

  aggiungiChilometri(km){
    if (km > 0) {
      this.chilometraggio += km;
    } else {
      console.log("I km devono essere superiori allo 0");
    }
  }

  mostraChilometraggio(){
    return (`Chilometraggio attuale: ${this.chilometraggio} km`)
  }
}


const subaruBaracca = new Automobile("Subaru", "Baracca", 1999, 5000);
console.log(subaruBaracca.description());
subaruBaracca.aggiungiChilometri(150);
console.log(subaruBaracca.mostraChilometraggio());