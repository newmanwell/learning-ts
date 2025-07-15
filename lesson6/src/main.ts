class Developer {

  // ! assertion allows you to initalize and makes TS happy
  whatsGoingOn!: string;

  name: string;
  computer: string;
  age: number;
  city: string;

  constructor(name: string, computer: string, age: number, city: string) {
    this.name = name;
    this.computer = computer;
    this.age = age;
    this.city = city;
  }
}

// Visibility Modifiers
class SomeGuy {                                                                                         // has default value
  constructor(public readonly name: string, public age: number, protected city: string, private isTall: boolean = false) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.isTall = isTall;
  }

  // Method: Can use isTall even though it is private becuse it is still inside the class
  public getTallness() {
    return `Am I tall? ${this.isTall}!`
  }
}

const Shaun = new SomeGuy('Shaun', 47, 'Jacksonville', true);
const Jim = new SomeGuy('Jim', 68, 'London'); // used default value for isTall

console.log(Shaun.getTallness);
// console.log(Shaun.isTall); nope, isTall is private