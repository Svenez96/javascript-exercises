function timer(){
    console.log("1 secondo");
};

const intervallo = setInterval(timer, 1000);

setTimeout(() => {
    clearInterval(intervallo);
        console.log("Sono passati 5 secondi. Intervallo interrotto.")
}, 5000);

console.log(timer);

// Ho sperimentato con questo timer
// let numero = 5;

// const contoAllaRovescia = setInterval(() => {
//     console.log(numero);
//     numero--;
    
//     if(numero < 0){
//         clearInterval(contoAllaRovescia);
//    console.log("Timer terminato");
//     };
// }, 1000);
