const num = [42, 34, 67, 89, 53, 74, 83, 56];
const redu = num.reduce((pre, curr) => pre + curr, 0);
console.log(redu);

console.log('============');

const people = [
  { name: 'Meena', age: 20 },
  { name: 'Rina', age: 15 },
  { name: 'Suchorita', age: 22 },
];
//Reduce
const total = people.reduce((p, c) => p + c.age, 0);
console.log(total);

console.log('===========');

//For Of loop
let sum = 0;
for (const p of people) {
  sum += p.age;
}
console.log(sum);
