const polterguys = `[
    {"nome": "Marco", "cognome": "Merrino"},
    {"nome": "Daniele", "cognome" :"Simonetti"}
]`;

const listaDiPersone = JSON.parse(polterguys);

listaDiPersone.push({"nome": "Ciccio", "cognome" :"Merrino"});

const polterguys3 = JSON.stringify(listaDiPersone);

console.log(polterguys3)
