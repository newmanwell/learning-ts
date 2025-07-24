"use strict";
// Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign0 = {
    studentId: "abc123",
    title: "Lesson 9",
    grade: 0
};
console.log(updateAssignment(assign0, { grade: 88 }));
const assignGraded = updateAssignment(assign0, { grade: 88 });
// Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: false });
// assignVerified.title = "Lesson 69" not allowed because assignVerified is readonly
// recordAssignment(assignGraded) not allowed because recordAssignment is required for all properties and assignGraded only has grade
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: false }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const whatSport = {
    Shaun: "Football",
    Phillip: "Hockey"
};
const combineStats = {
    Shaun: { dash: 4.49, coneDrill: 8.9 },
    Phillip: { dash: 4.38, coneDrill: 8.2 }
};
const newScore = {
    studentId: "def456",
    grade: 99.99
};
const preview = {
    studentId: "69420",
    title: "lesson 999"
};
// ReturnType
// type newAssign = {title: string, points: number};
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 98);
console.log(tsAssign);
const assignArguments = ['Something', 45];
const tsAssignTwo = createNewAssign(...assignArguments);
console.log(tsAssignTwo);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
