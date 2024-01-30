let arrayRevers = ['Banana', 'Apple', 'Coconut', 'Grape', 'Mango'];

for (let i = arrayRevers.length - 1; i >= 0; i--) {
  console.log(arrayRevers[i]);
}

console.log('======================');
// Sum for loop
let sumArrayRevers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
sum = 0;
for (let i = 0; i < sumArrayRevers.length; i++) {
  const element = sumArrayRevers[i];
  sum += element;
}
console.log(sum);

console.log('===========================');

let a = [5, 10, 15, 20, 25, 30];
let temp = a[4];
a[4] = a[1];
a[1] = temp;
console.log(a);
