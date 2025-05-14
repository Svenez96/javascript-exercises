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
  return `Chilometraggio attuale: ${this.chilometraggio} km`;
  }

  #calcolaEtà(){
    const annoCorrente = new Date().getFullYear()
    return annoCorrente - this.anno;
}

  mostraEtà(){
    return `Età dell'automobile: ${this.#calcolaEtà()} anni`;
  }

  _controllaChilometri(){
    if (this.chilometraggio > 100000) {
      return "Attenzione: chilometraggio elevato!";
    }
  }

  static confrontaChilometraggio(auto1, auto2){
    if (auto1.chilometraggio > auto2.chilometraggio){
      return `${auto1.marca} ${auto1.modello} ha più chilometri.`;
    } else if (auto2.chilometraggio > auto1.chilometraggio) {
      return `${auto2.marca} ${auto2.modello} ha più chilometri.`;
    } else {
      return "Le automobili hanno gli stessi chilometri"
    }  
  }
}

Automobile.prototype.saluta = function(){
  return `Ciao utente, questa è una ${this.marca} ${this.modello}`;
}

//sottoclasse elettrica 
class Elettrica extends Automobile{
  autonomia = 0;
  constructor(marca, modello, anno, chilometraggio, autonomia){
    super(marca, modello, anno, chilometraggio);
    this.autonomia = autonomia;
  }

  description(){
    return `${super.description()}. Autonomia: ${this.autonomia} km`;
    }

  ricaricaChilometri(km){
    if (km > 0) {
      this.autonomia += km;
    } else {
      console.log("Batteria scarica, ricaricare.");
    }
  }
}


const subaruBaracca = new Automobile("Subaru", "Baracca", 1999, 200000);
const subaruBaraccaElettrica = new Elettrica("Subaru", "Baracca", 1999, 20000, 250);
console.log(Automobile.confrontaChilometraggio(subaruBaracca, subaruBaraccaElettrica))

