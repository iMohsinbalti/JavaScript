var arr = ["Mohsin", "ali", "khan", "How"];
var l = arr.length;
console.log(arr[0].length);
document.write(l);
for (let i = 0; i < arr[0].length; i++) {
  console.log(arr[i]);
}
// arr.forEach((element) => {
//   document.write(element);
// });
arr.forEach((element) => {
  if (element == "Mohsin") {
    document.write(" ", element);
  } else {
    document.write("<br>This is not in function");
  }
});

var pets = ["zjans", "Mohsin", " Aaa", "King ", " Jan"];
document.write("<br>", pets.sort());
var num = [1, 2, 4, 10, 3, 15, 100];
//From largest to lowest
num.sort((a, b) => b - a);
document.write("<br>", num);
//From loweset to larget
num.sort((a, b) => a - b);
document.write("<br>", num);
//Find Method
const f = [100, 80, 30, 20, 10, 11, 110];
const s_new = f.find((element) => element < 80);
//it will return only first less then number
console.log(s_new);
const l_new = f.find((element) => element > 80);
//it will return only first greter then number
console.log(l_new);

//Include() Method

const score = [1, 2, 3, 4, 5, 6, 10];
const Include = score.includes(6);
console.log(Include, "Mohsin ali");

//Some and Every
const States = ["New york", "New Jersy", "New Zeland", "Calforna", "Albanma"];
const SomeStates = States.some((state) => state.startsWith("New"));
console.log(`Some state start with New ${SomeStates}`);

const EveryStates = States.every((state) => state.startsWith("New"));
console.log(`Every state start with New ${EveryStates}`);
