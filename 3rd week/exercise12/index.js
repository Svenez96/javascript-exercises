const persona = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 32,
    professione: "impiegato",
    nazionalita: "italiana"
};

const {nome, cognome, ...resto } = persona;

console.log(nome);
console.log(cognome);
console.log(resto);
