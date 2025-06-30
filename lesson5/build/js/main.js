"use strict";
// Type Assertions
// convert more/less specific type
let a = 'good morning';
let b = a; // less specific type (Two is a union)
let c = a; // more specific because Three is literal type
let d = 'afternoon';
let e = 'afternoon';
let f = 'afternoon';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let value = addOrConcat(6, 9, 'concat'); // we know we will return a string
let valueTwo = addOrConcat(6, 9, 'concat'); // TS is ok with this but a string will be returned
// const ten = 10 as string // Busted by TS!
const tenAgain = 10; // double casting or forced casting
