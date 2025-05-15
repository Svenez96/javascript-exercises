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
    return `Descrizione veicolo: ${this.marca} ${this.modello} del ${this.anno}.`;
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
    } else if (auto2.chilometraggioAttuale > auto1.chilometraggioAttuale) {
      return `${auto2.marca} ${auto2.modello} ha più chilometri.`;
    } else {
      return "Le automobili hanno gli stessi chilometri"
    }  
  }

  static verificaIstanza(obj, classe){
    if (obj instanceof classe){
      return `L'oggetto è un'istanza di ${classe.name}.`;
    }  else {
      return `L'oggetto non è un'istanza di ${classe.name}.`;
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
  caricoMassimo = 0;
  caricoAttuale = 0;

  constructor(marca, modello, anno, _chilometraggio, caricoMassimo, caricoAttuale){
    super(marca, modello, anno, _chilometraggio);
    this.caricoMassimo = caricoMassimo;
    this.caricoAttuale = caricoAttuale;
  }

  description(){
    return `${super.description()}Carico massimo: ${this.caricoMassimo} kg`;
    }

    carica(kg){
      if (kg > this.caricoMassimo) {
        console.log("Il carico supera la soglia massima consentita")
      } else {
        this.caricoAttuale = kg;
        console.log(`Carico attuale: ${kg} kg`);
      }
    }
}


const subaruBaracca = new Automobile("Subaru", "Baracca", 1999, 50000);
const subaruBaraccaElettrica = new Elettrica("Subaru", "Baracca", 1999, 20000, 250);
const ciamioncino = new Camion("Ford", "Premium", 2010, 40000, 2000);

console.log(Automobile.verificaIstanza(subaruBaracca, Automobile));
console.log(Automobile.verificaIstanza(subaruBaracca, Camion));
console.log(Automobile.verificaIstanza(ciamioncino, Elettrica));
console.log(Automobile.verificaIstanza(ciamioncino, Automobile));


