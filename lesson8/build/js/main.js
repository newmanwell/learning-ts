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
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "website"));
console.log(getUsersProperty(usersArray, "phone"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("Something");
console.log(store.state);
store.state = "Some other string"; // OK because it is still a string
// store.state = 69 not ok because store.state is now and forever a string
const newState = new StateObject([true]);
console.log(newState.state);
newState.state = [1, 'Bill', false];
console.log(newState.state);
