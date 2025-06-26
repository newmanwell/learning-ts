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
allNames = 'Maureen'