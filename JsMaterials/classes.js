class Animal {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
const animal = new Animal("tom", 2);
//console.log(animal);
//console.log(animal.eat());
//console.log(animal.isSuperCute());
//console.log(animal.isCute());
class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  germanShfart() {
    return this.age > 5;
  }
  run() {
    return `${this.name} is running at ${this.speed}`;
  }
  eat() {
    return `motified at ${this.name} is eating `;
  }
} //animal is base class and dog is derived class.in javascript called subclass

//object and instance is same
const tommay = new Dog("tommany", 8);
//const tommay = new Dog("tommany", 8 ,47); we add onother property 47 but their the property is not define in Animal constructor so we add constructor to the Dog class
//console.log(tommay.age);
//console.log(tommay);
//const jammi = new Dog("jammy", 8, 20);
//console.log(jammi.run());
//console.log(jammi.isCute());
//console.log(jammi.eat());

//Getter and setter

class person {
  constructor(fn, ln, age) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
  }

  get fullName() {
    // now this method act as property
    return `${this.firstName} ${this.lastName}`;
  }
  setName(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
  }
  //we can set the above code we usig set keyword
  set fullName(name) {
    const [fn, ln] = name.split(" ");
    this.firstName = fn;
    this.lastName = ln;
  }
}

const person1 = new person("moshin", 22);
person1.setName("Mohsin", "ali");

person1.firstName = "Sajid";
//person1.lastName = "Ali";
//console.log(person1.fullName);

//console.log(person1.info()); //this will return an error.

person1.fullName = "Mohsin ALi";

console.log(person1);

console.log(person1.firstName);
