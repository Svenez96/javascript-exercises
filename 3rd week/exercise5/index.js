const manga = {
    autore: "Takehiko Inoue",
    titolo: "Vagabond",
    target: "seinen"
}

let { autore: scrittore, titolo: nomeOpera, target: pubblico } = manga;

console.log("manga:",nomeOpera,"scritto e sceneggiato da:",scrittore)