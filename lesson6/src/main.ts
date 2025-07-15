class Developer {
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
class SomeGuy {
  constructor(public readonly name: string, public age: number, private isTall: boolean, protected city: string) {
    this.name = name;
    this.age = age;
    this.isTall = isTall;
    this.city = city;
  }
}