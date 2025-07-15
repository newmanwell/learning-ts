"use strict";
class Developer {
    constructor(name, computer, age, city) {
        this.name = name;
        this.computer = computer;
        this.age = age;
        this.city = city;
    }
}
// Visibility Modifiers
class SomeGuy {
    constructor(name, age, city, isTall = false) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.isTall = isTall;
        this.name = name;
        this.age = age;
        this.city = city;
        this.isTall = isTall;
    }
    // Method: Can use isTall even though it is private becuse it is still inside the class
    getTallness() {
        return `Am I tall? ${this.isTall}!`;
    }
}
const Shaun = new SomeGuy('Shaun', 47, 'Jacksonville', true);
const Jim = new SomeGuy('Jim', 68, 'London'); // used default value for isTall
console.log(Shaun.getTallness());
// console.log(Shaun.isTall); nope, isTall is private
class SomeGal extends SomeGuy {
    constructor(hairColor, name, age, city) {
        super(name, age, city); // super grabs from SomeGuy and must be before hairColor
        this.hairColor = hairColor;
        this.hairColor = hairColor;
    }
}
const Maureen = new SomeGal('Brown', 'Maureen', 39, 'Jacksonville');
class Football {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.name = name;
        this.position = position;
    }
    play(action) {
        return `${this.name} ${action} as a ${this.position}`;
    }
}
const Caleb = new Football('Caleb', 'QB');
console.log(Caleb.play('throws'));
// Static Class
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // ++ being before means id will be 1, if after count will be 0
    }
}
Peeps.count = 0;
console.log(Peeps.count);
const Willy = new Peeps('Willy');
const Mike = new Peeps('Mike');
const Phil = new Peeps('Phil');
console.log(Peeps.count);
console.log(Willy.id);
// Getters and Setters
class Teams {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(element => typeof element === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Must be an array of strings');
    }
}
const FavTeams = new Teams;
FavTeams.data = ['Bears', 'Bulls', 'Blackhawks', 'White Sox', 'Jaguars'];
console.log(FavTeams.data);
FavTeams.data = [...FavTeams.data, 'Cubs'];
console.log(FavTeams.data);
