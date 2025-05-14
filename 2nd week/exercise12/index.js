class Automobile {
  marca = "";
  modello = "";
  anno = 0;
  _chilometraggio = 0;

   #contatoreChiamate = 0;

  constructor(marca, modello, anno, chilometraggio){
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this._chilometraggio = chilometraggio;
  }

  description(){
    return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
  }

  #incrementoContatore(){
    this.#contatoreChiamate++;
  }

  aggiungiChilometri(km){
    this.#incrementoContatore();
    if (km > 0) {
      this._chilometraggio += km;
    } else {
      console.log("inserire un valore d'incremento");
    }
  }

  mostraContatore(){
    return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`
  }

  get chilometraggioAttuale(){
    return this._chilometraggio;
  }

  // Setter
  set chilometraggio(km){
    if (km >= this._chilometraggio){
      this._chilometraggio = km;
    } else {
      console.log("Non puoi diminuire il chilometraggio");
    }
  }

  mostraChilometraggio(){
  return `Chilometraggio attuale: ${this._chilometraggio} km`;
  }

  #calcolaEtà(){
    const annoCorrente = new Date().getFullYear()
    return annoCorrente - this.anno;
}

  mostraEtà(){
    return `Età dell'automobile: ${this.#calcolaEtà()} anni`;
  }

  _controllaChilometri(){
    if (this._chilometraggio > 100000) {
      return "Attenzione: chilometraggio elevato!";
    }
  }

  static confrontaChilometri(auto1, auto2){
    if (auto1.chilometraggioAttuale > auto2.chilometraggioAttuale){
      return `${auto1.marca} ${auto1.modello} ha più chilometri.`;
    } else if (auto2.chilometraggioAttule > auto1.chilometraggioAttuale) {
      return `${auto2.marca} ${auto2.modello} ha più chilometri.`;
    } else {
      return "Le automobili hanno gli stessi chilometri"
    }  
  }

}

Automobile.prototype.saluta = function(){
  return `Ciao utente, questa è una ${this.marca} ${this.modello}`;
}

class Elettrica extends Automobile{
  autonomia = 0;
  constructor(marca, modello, anno, _chilometraggio, autonomia){
    super(marca, modello, anno, _chilometraggio);
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

class Camion extends Automobile{
  constructor(marca, modello, anno, _chilometraggio, autonomia){
    super(marca, modello, anno, _chilometraggio, autonomia);
  }
}

const subaruBaracca = new Automobile("Subaru", "Baracca", 1999, 50000);
const subaruBaraccaElettrica = new Elettrica("Subaru", "Baracca", 1999, 20000, 250);

subaruBaracca.chilometraggio = 60000;
subaruBaracca.chilometraggio = 40000;
console.log(subaruBaracca.chilometraggioAttuale);

