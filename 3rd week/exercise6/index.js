const pokémon = {
    nome:"Charmender",
    tipo:"fuoco",
    evoluzione:"Charmeleon"
};

let {nome, tipo, evoluzione, debolezze = "acqua, terra, roccia"} = pokémon;

console.log("Nome pokémon:",nome,"Tipo:",tipo,"Si evolve in:",evoluzione,"è debole contro:",debolezze )