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

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: false};

// assignVerified.title = "Lesson 69" not allowed because assignVerified is readonly
// recordAssignment(assignGraded) not allowed because recordAssignment is required for all properties and assignGraded only has grade
recordAssignment({...assignGraded, verified: false});

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF"
}

type Atheletes = "Shaun" | "Phillip";
type Sports = "Baseball" | "Football" | "Basketball" | "Hockey";

const whatSport: Record<Atheletes, Sports> = {
  Shaun: "Football",
  Phillip: "Hockey"
}

interface Combine {
  dash: number,
  coneDrill: number
}

const combineStats: Record<Atheletes, Combine> = {
  Shaun: {dash: 4.49, coneDrill: 8.9},
  Phillip: {dash: 4.38, coneDrill: 8.2}
}

// Pick and Omit
                                     // picking what we want out of Assignment
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const newScore: AssignResult = {
  studentId: "def456",
  grade: 99.99
}
                                      // omits what we hate
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "69420",
  title: "lesson 999"
}

// Exclude and Extract

type removedSports = Exclude<Sports, "Hockey">;

type americanSports = Extract<Sports, "Baseball" | "Football" | "Basketball">;