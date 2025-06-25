let stringArr = ['one', 'yellow', 'Shaun'];
let bands = ['Oasis', 'Cage The Elephant', 73];
let mixedData = ['RATM', 69420, false];

stringArr[0] = 'Phil'
// stringArr[1] = 55; nope, strings only
// stringArr.push(false); still strings only

bands[1] = 4444;
bands.unshift('Bad Company');

// stringArr = bands; bands has a number
bands = stringArr;

let newArray = [];
let countries: string[] = [];
countries.push('United Kingdom');
// countries.push(false); pushing a boolean to a string array

// Tuples

let myTuple: [string, number, boolean] = ['Shaun', 47, false];
let mixed = ['Maureen', 2, true];

// mixed = myTuple; allowed, proper types in order
// myTuple = mixed not allowed because mixed can have less/more than three elements
// myTuple[3] = 'whatever' myTuple can only have three elements
myTuple[2] = true;

// Objects

let myObject: object
myObject = []; // Ok because an array is a object
console.log(typeof myObject);
myObject = countries
myObject = {};

const someObject = {
  name: 'Shaun',
  working: false
}

// someObject.working = 'nope'; Not allowed because working is inferred as a boolean

type Shoppers = {
  name: string,
  inStore?: boolean, // ? makes it optional
  sizes: (string | number)[]
}

// interface works like type
interface Managers {
  name?: string,
  working: boolean,
  yearsEmployed: number
}

let spn: Shoppers = {
  name: 'Shaun',
  inStore: false,
  sizes: ['L', 11]
}

let mmm: Shoppers = {
  name: 'Maureen',
  sizes: ['S', 4, 6]
}

let smj: Managers = {
  // name: 'Sean',
  working: true,
  yearsEmployed: 3
}

// spn.age = 47 can't add properties

const greetShopper = (shopper: Shoppers) => {
  return `Good afternoon ${shopper.name}!!`;
}

const greetManager = (manager: Managers) => {
  // since name is allowed to be undefined in Managers
  if (manager.name) {
    return `Get to work ${manager.name}`
  }
  return `Who is in charge?`
}


console.log(greetShopper(mmm));
console.log(greetManager(smj));
