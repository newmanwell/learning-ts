// Utility types

// Partial Type

interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
  return {...assign, ...propsToUpdate};
}

const assign0: Assignment = {
  studentId: "abc123",
  title: "Lesson 9",
  grade: 0
}

console.log(updateAssignment(assign0, {grade: 88}));
const assignGraded: Assignment = updateAssignment(assign0, {grade: 88});