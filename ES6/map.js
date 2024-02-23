const numbers = [23, 55, 23, 63, 57, 78, 23];
function double(num) {
  return num * 3;
}
const result = numbers.map(double);
console.log(result);

// shortcut way
const ab = numbers.map((num) => num + 5);
console.log(ab);

// map length
const ac = ['ataullha', 'hawa', 'rubel', 'mikale'];
const d = ac.map((nam) => nam.length);
console.log(d);
// First letter access
const firstLetter = ac.map((l) => l[0]);
console.log(firstLetter);

console.log('=================');
// =============
const a = [1, 3, 5, 7, 9];
const arr = [];
for (const n of a) {
  arr.push(n + 1);
}
console.log(arr);

console.log('==========');
const mapSolve = a.map((n) => n + 1);
console.log(mapSolve);
