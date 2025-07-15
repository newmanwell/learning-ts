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
