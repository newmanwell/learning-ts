"use strict";
// Arrays, Tuples, Objects, Enums
let stringArr = ['one', 'yellow', 'Shaun'];
let bands = ['Oasis', 'Cage The Elephant', 73];
let mixedData = ['RATM', 69420, false];
stringArr[0] = 'Phil';
// stringArr[1] = 55; nope, strings only
// stringArr.push(false); still strings only
bands[1] = 4444;
bands.unshift('Bad Company');
// stringArr = bands; bands has a number
bands = stringArr;
let newArray = [];
let countries = [];
countries.push('United Kingdom');
// countries.push(false); pushing a boolean to a string array
// Tuples
let myTuple = ['Shaun', 47, false];
let mixed = ['Maureen', 2, true];
// mixed = myTuple; allowed, proper types in order
// myTuple = mixed not allowed because mixed can have less/more than three elements
// myTuple[3] = 'whatever' myTuple can only have three elements
myTuple[2] = true;
// Objects
let myObject;
myObject = []; // Ok because an array is a object
console.log(typeof myObject);
myObject = countries;
myObject = {};
const someObject = {
    name: 'Shaun',
    working: false
};
let spn = {
    name: 'Shaun',
    inStore: false,
    sizes: ['L', 11]
};
let mmm = {
    name: 'Maureen',
    sizes: ['S', 4, 6]
};
let smj = {
    // name: 'Sean',
    working: true,
    yearsEmployed: 3
};
// spn.age = 47 can't add properties
const greetShopper = (shopper) => {
    return `Good afternoon ${shopper.name}!!`;
};
const greetManager = (manager) => {
    // since name is allowed to be undefined in Managers
    if (manager.name) {
        return `Get to work ${manager.name}`;
    }
    return `Who is in charge?`;
};
console.log(greetShopper(mmm));
console.log(greetManager(smj));
// Enums
// Unlike most TypeScript features, Enums are not a
// type-level addition to JavaScript but something
// added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 14] = "U";
    Grade[Grade["D"] = 15] = "D";
    Grade[Grade["C"] = 16] = "C";
    Grade[Grade["B"] = 17] = "B";
    Grade[Grade["A"] = 18] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
