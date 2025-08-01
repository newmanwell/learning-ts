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

// Nonnullable

type AllPossibleSports = 'Willy' | 'Frank' | null | undefined;
type NamesOnly = NonNullable<AllPossibleSports>;

// ReturnType

// type newAssign = {title: string, points: number};

const createNewAssign = (title: string, points: number) => {
  return {title, points};
}

// newAssign will alwayd be updated if createNewAssign changes
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign:  NewAssign = createNewAssign("Utility Types", 98);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArguments: AssignParams = ['Something', 45];

const tsAssignTwo: NewAssign = createNewAssign(...assignArguments);

console.log(tsAssignTwo);

// Awaites - helps with ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))