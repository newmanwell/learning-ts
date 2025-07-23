// Genarics

// Must always return a string
const strEcho = (arg: string): string => {
  return arg;
}

// <T> allows this function to work with any type
const echo = <T>(arg: T): T => {
  return arg;
}

const isObject = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}

console.log(isObject(5));
console.log(isObject(false));
console.log(isObject('oasis'));
console.log(isObject([1, 2, 3]));
console.log(isObject(null));
console.log(isObject({name: 'Patrick'}));
