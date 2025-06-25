let myName: string = 'Shaun';
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number | boolean;

myName = "Billy";
meaningOfLife = 69;
isLoading = false;
album = 'Oasis';
album = 10;
album = true;

const concat = (a: number, b: string) => {
  return a + b
}

console.log(concat(54, 'FUN'));

const sum = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(sum(69, 420));

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g