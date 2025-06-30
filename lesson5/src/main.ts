// Type Assertions

type One = string;
type Two = string | number;
type Three = 'good night'; // literal type

// convert more/less specific type
let a: One = 'good morning';
let b = a as Two; // less specific type (Two is a union)
let c = a as Three; // more specific because Three is literal type

let d = <One>'afternoon';
let e = <string>'afternoon';
let f = <string | boolean>'afternoon';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
}

let value: string = addOrConcat(6, 9, 'concat') as string; // we know we will return a string
let valueTwo: number = addOrConcat(6, 9, 'concat') as number; // TS is ok with this but a string will be returned

// const ten = 10 as string // Busted by TS!
const tenAgain = (10 as unknown) as string; // double casting or forced casting

// The DOM!

const imgOne = document.querySelector('img');
const imgTwo = document.querySelector('#someIdName'); // on hover TS infers this is an Element rather that more specific HTMLElement
const imgThree = document.getElementById('#someOtherIdName');
const imgFour = document.querySelector('img') as HTMLImageElement

// imgOne.src could be null, TS doesn't like // side node: document.querySelector('img')!; will tell TS this is not null 
imgFour.src // got specific with: as HTMLImageElement