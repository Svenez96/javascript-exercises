class Automobile {
  marca = "";
  modello = "";
  anno = 0;
  chilometraggio = 0;

  constructor(marca, modello, anno, chilometraggio){
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.chilometraggio = chilometraggio;
  }

  description(){
    return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
  }

  aggiungiChilometri(km){
    if (km > 0) {
      this.chilometraggio += km;
    } else {
      console.log("inserire un valore d'incremento");
    }
  }

  mostraChilometraggio(){
    return (`Chilometraggio attuale: ${this.chilometraggio} km`)
  }
}

//sottoclasse elettrica 
class Elettrica extends Automobile{
  autonomia = 0;
  constructor(marca, modello, anno, chilometraggio, autonomia){
    super(marca, modello, anno, chilometraggio);
    this.autonomia = autonomia;
  }

  description(){
    return `Questa è una ${this.marca} ${this.modello} del ${this.anno}. Chilometraggio attuale: ${this.chilometraggio}km. Autonomia: ${this.autonomia} km`;
  }

  ricaricaChilometri(km){
    if (km > 0) {
      this.autonomia += km;
    } else {
      console.log("Batteria scarica, ricaricare.");
    }
  }
}

const subaruBaracca = new Automobile("Subaru", "Baracca", 1999, 20000);
const subaruBaraccaElettrica = new Elettrica("Subaru", "Baracca", 1999, 20000, 250);
console.log(subaruBaraccaElettrica.description());
subaruBaraccaElettrica.ricaricaChilometri(150);
console.log(`Ricarica effettuata, autonomia dopo la ricarica: ${subaruBaraccaElettrica.autonomia}km`)

