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

const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
  if (Array.isArray(arg) && !arg.length) {
    return {arg, is: false};
  }

  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return {arg, is: false};
  }
  return {arg, is: !!arg};
}

console.log(isTrue(false));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(41));
console.log(isTrue(''));
console.log(isTrue([1, 3, 5]));
console.log(isTrue(NaN));
console.log(isTrue({ name: 'Shaun'}));
console.log(isTrue([]));
console.log(isTrue(-0));
console.log(isTrue({}));
console.log(isTrue(true));


// With an interface as its type
interface BooleanCheck<T> {
  value: T,
  is: boolean
}

const checkingBoolValue = <T>(arg: T): BooleanCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {value: arg, is: false};
  }

  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return {value: arg, is: false};
  }
  return {value: arg, is: !!arg};
}

interface HasID {
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  // logic to process user
  return user;
}

console.log(processUser({id: 0, name: 'Eric'}));
// console.log(processUser({ name: 'Eric'})); throws error becuse no ID key