function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}
CreateUser.prototype.about = function () {
  return ` My name is ${this.name} and age is ${this.age} `;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return "la la la la ";
};
let user1 = new CreateUser("Mohisn", 18);
let user2 = new CreateUser("ALi", 22);

//console.log(user1);
//console.log(user2.about());
for (let key in user1) {
  //console.log(key);
  if (user1.hasOwnProperty(key)) {
    // console.log(key);
  }
}
function hello() {
  //console.log("Hello world");
}
//console.log(hello.prototype); //here prototype is Object

hello.prototype = []; //now its an empty list
hello.prototype.push(1, 2, 3, 4);
console.log(hello.prototype);
let numbers = [1, 3, 4, 5];
// console.log(Object.getPrototypeOf(numbers));
//console.log(Array.prototype);

//In E6 class keyword is introduce

class CreateUser1 {
  constructor(name, age) {
    console.log("constructor is called");
    this.name = name;
    this.age = age;
  }

  about() {
    return ` My name is ${this.name} and age is ${this.age} `;
  }
  is18() {
    return this.age >= 18;
  }

  sing() {
    return "la la la la ";
  }
  func(a) {
    //return a;
    console.log(a);
  }
  //using class their is no to user CreateUser.prototype.about or .sing or .is18
  //use new keyword when the object is creating otherwise their will be error.
}
let user3 = new CreateUser1("Mohisn", 18);

let user4 = new CreateUser1("Mohisn", 18);

//console.log(user4.func("moshin")); if use return a
user4.func("mohsin");
//console.log(user4.about());
//console.log(Object.getPrototypeOf(user4));
