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
