const students = [
   {name:"Giovanni Belardi", grade: 50},
   {name:"Roberto Grimaldi", grade: 60},
   {name:"Carmelo Strati", grade: 85},
   {name:"Demetrio Cisafrulli", grade: 55},
   {name:"Francesco Trimarchi", grade: 75}
];

console.log(students);

const passedStudents = students.filter((student) => student.grade >= 60 );

console.log(passedStudents);

const firstStudent = students.find((student) => student.grade < 60);


console.log(firstStudent);