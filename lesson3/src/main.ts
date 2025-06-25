let stringArr = ['one', 'yellow', 'Shaun'];
let bands = ['Oasis', 'Cage The Elephant', 73];
let mixedData = ['RATM', 69420, false];

stringArr[0] = 'Phil'
// stringArr[1] = 55; nope, strings only
// stringArr.push(false); stil strings only

bands[1] = 4444;
bands.unshift('Bad Company');

// stringArr = bands; bands has a number
bands = stringArr;

let newArray = [];
let countries: string[] = [];
countries.push('United Kingdom');
// countries.push(false); pushing a boolean to a string array