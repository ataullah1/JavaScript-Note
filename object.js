const a = {
  firstName: 'Md',
  lastName: 'Ataullah',
  color: 'Black',
  Age: 18.2,
  isDeveloper: true,
};

console.log(a);
console.log(typeof a);

// Dot Notation

console.log(a.lastName);

// Bracket dia access korar niom======
console.log(a['Age']);
console.log('===========');

const obj = {
  name: 'Ataullah',
  age: 18,
  'local address': 'Uttar Kakchira',
};

const output = obj['local address'];
const output2 = obj['age'];
const output3 = obj['name'];
console.log(output, output2, output3);
