const person = {
   name: "Frank",
   age: 68,
   city: "Reggio Calabria",
}

for (let key in person) {
   console.log(key + ": " + person[key]);
 }