const automobile = ["Fiat", "panda", 2006];

let [marca, modello, anno, chilometraggio = 0, autonomia = 0] = automobile;

console.log("Questa è una",marca, modello,"del",anno,"Chilometraggio:",chilometraggio,"km Autonomia:",autonomia,"km")