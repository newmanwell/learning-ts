"use strict";
// Utility types
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
