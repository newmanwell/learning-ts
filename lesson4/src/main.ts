// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Managers = {
  name?: string,
  working: boolean,
  department: stringOrNumberArray
}

type userId = stringOrNumber;

// interface postId = stringOrNumber does not work, used more for classes or objects


// Literal types

let myName: 'Shaun';
// myName = = 'Billy' can't change type

let allNames: 'Shaun' | 'Maureen' | 'Billy';
allNames = 'Maureen';

// Functions

const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
}

// void is the type if a function does not return anything
const theMessage = (message: any): void => {
  console.log(message);
}

theMessage('Sup?');
theMessage(multiply(69, 420));
// theMessage(multiply(2, "w")); can't pass a tring for type number

// function delaration is ok too!
const divide = function (num3: number, num4: number): number {
  return num3 / num4;
}

theMessage(divide(69, 420));

type mathFunction = (num5: number, num6: number) => number;
interface mathFunction2 {
  (num7: number, num8: number): number
}

const add: mathFunction = function (a, b) {
  return a + b;
}

theMessage(add(69, 420));

const subtract: mathFunction2 = (c, d) => {
  return c - d;
}

theMessage(subtract(69, 420));

// optional parameters
//                                          ? makes it optional and must come last
const addAll = (num1: number, num2: number, num3?: number): number => {
  if (num3) {
    return num1 + num2 + num3;
  }
  return num1 + num2;
}

//                                             default value if no number is passed in
const addingAll = (num1: number, num2: number, num3: number = 69): number => {
  return num1 + num2 + num3;
}

theMessage(addAll(2, 4));
theMessage(addAll(2, 4, 6));
theMessage(addingAll(2, 4));
theMessage(addingAll(2, 4, 10));

// Rest Parameters

const total = (num1: number, ...nums: number[]): number => {
  return num1 + nums.reduce((pre, cur) => pre + cur);
}

theMessage(total(69, 420, 55));

// Never type

const createError = (err: string): never => {
  throw new Error(err);
}

// never could be an endless loop
const foreverFunction = () => {
  let i: number = 1
  while (true) {
    i++
  }
}

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}

// using never type (because create error can NEVER happen)
const numberOroString = (value: number | string): string =>  {
  if (typeof value === 'string') return 'STRING!!';
  if (isNumber(value)) return 'NUMBER!!';
  return createError('Blahhhhhhh') // never type
}



