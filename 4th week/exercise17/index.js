const persona = {
    nome: "Domenico",
    cognome: "Mazza",
    eta: 29,
    citta: "Reggio Calabria"
};

const messaggio = `
    Ciao, 
    mi chiamo ${persona.nome} ${persona.cognome}
    ho ${persona.eta} anni
    e vivo a ${persona.citta}. 
`
console.log(messaggio)