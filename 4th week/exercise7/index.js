let mostraRisultato = new Promise(function(resolve, reject){
  let ok = true
  if (ok){
    resolve ("Hello User!")
  } else {
    reject ("Whoooops")
  }
})

let mostraAltroRisultato = new Promise(function(resolve, reject){
  let ok = false
  if (ok){
    resolve ("Hello User!")
  } else {
    reject ("Whoooops")
  }
})

mostraRisultato

.then (function (risultato) {
        console.log(risultato)
        return mostraAltroRisultato
    })

.then (function (altroRisultato) {
        console.log(altroRisultato)
    })
.catch (error => console.error(error))


