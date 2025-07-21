"use strict";
// Index Signatures
// interface TransactionObject {
//   // can alsu use index in place of key
//   readonly [key: string]: number;
// }
const currentTransactions = {
    Pizza: 10,
    Books: 0,
    Job: 22,
    Bagels: 33
};
console.log(currentTransactions.Books);
console.log(currentTransactions['Books']);
let prop = 'Books';
console.log(currentTransactions[prop]);
const totals = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(totals(currentTransactions));
// currentTransactions.Job = 10 can't assign becuse readonly
console.log(currentTransactions['Bagels']); // No TS error because Bagels could be added in the future
const newStudent = {
    name: 'Phil',
    missedDays: 2,
    sports: ['Football', 'Soccer']
};
// console.log(newStudent.homeroom); // Could be assigned in the future (line 45)
for (const key in newStudent) {
    console.log(`${key}: ${newStudent[key]}`);
}
Object.keys(newStudent).map(key => {
    console.log(newStudent[key]);
});
const logNewStudentKey = (newStudent, key) => {
    console.log(`Student ${key}: ${newStudent[key]}`);
};
logNewStudentKey(newStudent, 'name');
const monthlyIncomes = {
    salary: 0,
    bonus: -1,
    gigincome: -2
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
