const student = {
   name: "Giovanni Belardi",
   age: 16,
   grade: 60,
   school: "Example School"
}

const entries = Object.entries(student)
console.log(entries)

entries.forEach(([key, value]) => {
   console.log(` ${key} : ${value} `)
})