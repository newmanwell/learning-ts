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

console.log(Shaun.getTallness());
// console.log(Shaun.isTall); nope, isTall is private

class SomeGal extends SomeGuy {
  constructor(public hairColor: string, name: string, age: number, city: string) {
    super(name, age, city); // super grabs from SomeGuy and must be before hairColor
    this.hairColor = hairColor;
  }
}

const Maureen = new SomeGal('Brown', 'Maureen', 39, 'Jacksonville');



// Implements

interface Player {
  name: string,
  position: string,
  play(action: string): string;
}

class Football implements Player {
 
  constructor(public name: string, public position: string) {
    this.name = name;
    this.position = position;
  }

  play(action: string) {
    return `${this.name} ${action} as a ${this.position}`;
  }
}

const Caleb = new Football('Caleb', 'QB');
console.log(Caleb.play('throws'));





// Static Class

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; // ++ being before means id will be 1, if after count will be 0
  }
}

console.log(Peeps.count);

const Willy = new Peeps('Willy');
const Mike = new Peeps('Mike');
const Phil = new Peeps('Phil');

console.log(Peeps.count);
console.log(Willy.id);






// Getters and Setters

class Teams {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(element => typeof element === 'string')){
      this.dataState = value;
      return 
    } else throw new Error('Must be an array of strings');
  }
}

const FavTeams = new Teams;
FavTeams.data = ['Bears', 'Bulls', 'Blackhawks', 'White Sox', 'Jaguars'];
console.log(FavTeams.data);
FavTeams.data = [...FavTeams.data, 'Cubs'];
console.log(FavTeams.data);