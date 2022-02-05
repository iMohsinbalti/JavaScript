const students = [
  { name: "John", grade: 75 },
  { name: "james", grade: 93 },
  { name: "Mohsin", grade: 80 },
  { name: "ali", grade: 94 },
];
//Challenge quetsion1
//Sort the array of student on their grade
//largest to smallest
students.sort((a, b) => b.grade - a.grade);
console.log(students);

//After sorting reverser the array
console.log(students.reverse());
students.forEach((element) => {
  console.log(element.grade);
});
//Find the student who has grade more then 80

const s = students.find((element) => element.grade > 90);
console.log(s);
