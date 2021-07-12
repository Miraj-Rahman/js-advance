const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Mannaaaa' },
    { id: 41, name: 'Moyouri' },
    { id: 71, name: 'Deepjol' },
]

// let studentsName = []
// for (let i = 0; i < students.length; i++) {
//     const property = students[i];
//     const name = property.name;
//     studentsName.push(name);
// }
// console.log(studentsName);

const names = students.map(s => s.name);
const ids = students.map(s => s.id)
const filter = ids.filter(x => x > 40);
const bigger = students.filter(x => x.id > 40);
const bigger1 = students.find(x => x.id > 40);
console.log(bigger1);