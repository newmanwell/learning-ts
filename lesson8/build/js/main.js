"use strict";
// Genarics
// Must always return a string
const strEcho = (arg) => {
    return arg;
};
// <T> allows this function to work with any type
const echo = (arg) => {
    return arg;
};
const isObject = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObject(5));
console.log(isObject(false));
console.log(isObject('oasis'));
console.log(isObject([1, 2, 3]));
console.log(isObject(null));
console.log(isObject({ name: 'Patrick' }));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue(41));
console.log(isTrue(''));
console.log(isTrue([1, 3, 5]));
console.log(isTrue(NaN));
console.log(isTrue({ name: 'Shaun' }));
console.log(isTrue([]));
console.log(isTrue(-0));
console.log(isTrue({}));
console.log(isTrue(true));
const checkingBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    // logic to process user
    return user;
};
console.log(processUser({ id: 0, name: 'Eric' }));
// console.log(processUser({ name: 'Eric'})); throws error becuse no ID key
