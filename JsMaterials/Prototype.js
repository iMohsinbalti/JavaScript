function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}
CreateUser.prototype.about = function () {
  return ` My name is ${this.name} and age is ${this.age} `;
};
let user1 = new CreateUser("Mohisn", 18);
let user2 = new CreateUser("ALi", 22);

let numbers = [1, 3, 4, 5];

console.log(user1);
console.log(user2.about());
// console.log(Object.getPrototypeOf(numbers));
