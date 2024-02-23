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
