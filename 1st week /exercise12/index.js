let input = prompt("Inserisci il tuo punteggio:");
let score = parseInt(input);

switch (true) {
  case (score >= 90 && score <= 100):
    console.log("voto ottimo");
    break;
  case (score >= 70 && score <= 89):
    console.log("voto buono");
    break;
  case (score >= 60 && score <= 69):
    console.log("voto sufficiente");
    break;
  case (score <= 59):
    console.log("voto insufficiente");
    break;
  default:
    console.log("voto non valido");
}