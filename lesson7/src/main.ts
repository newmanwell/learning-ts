// Index Signatures

interface TransactionObject {
  // must have pizza, books and jobs plus optional others because of line 5
  readonly [key: string]: number;
  Pizza: number,
  Books: number,
  Job: number
}

// interface TransactionObject {
//   // can alsu use index in place of key
//   readonly [key: string]: number;
// }

const currentTransactions: TransactionObject = {
  Pizza: 10,
  Books: 0,
  Job: 22,
  Bagels: 33
}

console.log(currentTransactions.Books);
console.log(currentTransactions['Books']);

let prop: string = 'Books';
console.log(currentTransactions[prop]);

const totals = (transactions: TransactionObject): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
}

console.log(totals(currentTransactions));

// currentTransactions.Job = 10 can't assign becuse readonly

console.log(currentTransactions['Bagels']); // No TS error because Bagels could be added in the future


interface Student {
  // [index: string]: string | string[] | number | undefined
  name: string,
  missedDays: number,
  sports?: string[]
}

const newStudent: Student = {
  name: 'Phil',
  missedDays: 2,
  sports: ['Football', 'Soccer']
}

// console.log(newStudent.homeroom); // Could be assigned in the future (line 45)

for (const key in newStudent) {
  console.log(`${key}: ${newStudent[key as keyof Student]}`);
}

Object.keys(newStudent).map(key => {
  console.log(newStudent[key as keyof typeof newStudent])
});

const logNewStudentKey = (newStudent: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${newStudent[key]}`)
}

logNewStudentKey(newStudent, 'name');

// interface Incomes {
//   [key: string]: number;
// }

type Streams = 'salary' | 'bonus' | 'gigincome';

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 0,
  bonus: -1,
  gigincome: -2
}

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}