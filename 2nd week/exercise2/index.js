class Automobile{
  marca = "";
  modello = "";
  anno = 0;

    constructor(marca, modello, anno){
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
    }
  }

class autoInfoKm extends Automobile{
  chilometraggio = 0;

  constructor(marca, modello, anno, chilometraggio){
    super(marca, modello, anno);
    this.chilometraggio = chilometraggio;
  }

  aggiungiChilometri(km){
    if (km > 0) {
      this.chilometraggio += km;
    } else {
      console.log("inserire un valore d'incremento");
    }
   } 
  
  mostraChilometraggio(){
   return (`Questa è una ${this.marca} ${this.modello} del ${this.anno}. Chilometraggio attuale: ${this.chilometraggio} km`)
   }
}

subaruBaracca.aggiungiChilometri(150);

const subaruBaracca = new autoInfoKm("Subaru", "Baracca", 1999, 0);

console.log(subaruBaracca.mostraChilometraggio());