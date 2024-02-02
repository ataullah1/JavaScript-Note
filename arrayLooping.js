const friend = ['Elon', 'Jokar', 'bigets', 'ami nije'];
for (const i of friend) {
  console.log(i);
}

for (let i = 0; i < friend.length; i++) {
  console.log(i);
  console.log(friend[i]);
}

console.log('==================');
let i = 0;
while (i < friend.length) {
  console.log(friend[i]);
  i++;
}

console.log('=======Only Even number for Looping============');
let numbers = [12, 98, 5, 41, 23, 78, 46];

let evenNum = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNum.push(numbers[i]);
  }
}
console.log(evenNum);

console.log('=======Only Even number for of Looping============');

const evenNumCount = [12, 98, 5, 41, 23, 78, 46];
const evenCount = [];
for (const i of evenNumCount) {
  if (i % 2 === 0) {
    evenCount.push(i);
  }
}
console.log(evenCount);

console.log('=======Array to string Looping============');

var biloy = ['Tom', 'Tim', 'Tin', 'Tik'];
const biloySingleString = biloy.join('');
console.log(biloySingleString);

console.log('=======Array to string using for Loop============');

var biloyArray = ['Tom', 'Tim', 'Tin', 'Tik'];
var biloyString = '';
for (const i of biloyArray) {
  biloyString += i;
}
console.log(biloyString);
