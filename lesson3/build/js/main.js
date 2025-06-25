"use strict";
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
