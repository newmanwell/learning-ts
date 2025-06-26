"use strict";
// interface postId = stringOrNumber does not work, used more for classes or objects
// Literal types
let myName;
// myName = = 'Billy' can't change type
let allNames;
allNames = 'Maureen';
// Functions
const multiply = (num1, num2) => {
    return num1 * num2;
};
// void is the type if a function does not return anything
const theMessage = (message) => {
    console.log(message);
};
theMessage('Sup?');
theMessage(multiply(69, 420));
// theMessage(multiply(2, "w")); can't pass a tring for type number
// function delaration is ok too!
const divide = function (num3, num4) {
    return num3 / num4;
};
theMessage(divide(69, 420));
const add = function (a, b) {
    return a + b;
};
theMessage(add(69, 420));
const subtract = (c, d) => {
    return c - d;
};
theMessage(subtract(69, 420));
// optional parameters
//                                          ? makes it optional and must come last
const addAll = (num1, num2, num3) => {
    if (num3) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
};
//                                             default value if no number is passed in
const addingAll = (num1, num2, num3 = 69) => {
    return num1 + num2 + num3;
};
theMessage(addAll(2, 4));
theMessage(addAll(2, 4, 6));
theMessage(addingAll(2, 4));
theMessage(addingAll(2, 4, 10));
// Rest Parameters
const total = (num1, ...nums) => {
    return num1 + nums.reduce((pre, cur) => pre + cur);
};
theMessage(total(69, 420, 55));
