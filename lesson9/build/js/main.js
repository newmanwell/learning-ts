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
