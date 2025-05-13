class Automobile{
  marca = "";
  modello = "";
  anno = 0;

  constructor(marca, modello, anno,){
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }

  description(){
    return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
  }
}

class Elettrica extends Automobile{
  autonomia = 0;

  constructor(marca, modello, anno, autonomia){
    super(marca,modello,anno);
    this.autonomia = autonomia;
  }


  ricaricaChilometri(km){
    if (km > 0) {
      this.autonomia += km;
    } else {
      console.log("inserire un valore d'incremento");
    }
  }


}

const subaruBaracca = new Automobile("Subaru", "Baracca", 1999, 0);
