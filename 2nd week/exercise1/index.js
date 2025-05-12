class Automobile {
  marca = "";
  modello = "";
  anno = 0;

    constructor(marca, modello, anno) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
    }
  
    description() {
      return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }
  }
  
  const subaruBaracca = new Automobile("Subaru", "Baracca", 1999);
  console.log(subaruBaracca.description());