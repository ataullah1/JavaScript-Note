const num = [4, 5, 6, 7, 8, 32];
const player = [42, 34, 67, 89, 53, 74, 83, 56];
const select = player.filter((p) => p > 70);
console.log(select);

const even = player.filter((p) => p % 2 === 1);
console.log(even);

console.log('============');

const a = [33, 50, 79, 78, 90, 101, 30];
const b = a.filter((n) => n % 10 === 0);
console.log(b);

console.log('============');
const instructor = [
  { name: 'Nobi', age: 28, position: 'Senior' },
  { name: 'Akil', age: 26, position: 'Junior' },
  { name: 'Shobuj', age: 30, position: 'Senior' },
];
const ab = instructor.filter((p) => p.position === 'Senior');
console.log(ab);
