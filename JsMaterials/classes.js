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
console.log(tommay);
const jammi = new Dog("jammy", 8, 20);
console.log(jammi.run());
console.log(jammi.isCute());
console.log(jammi.eat());
