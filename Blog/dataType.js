// const a = 1;
// const b = 2.35436;
// const c = -4;
// const d = -43.543673125;
// const e = +2345;
// console.log(a, b, c, d, e); //Output= 1, 2.35436, -4, -43.543673125, 2345

// //-- Code author © Ataullah --

// const a = 'Bangladesh'; // single quotations (' ')
// const b = 'Md Ataullah'; // single quotations (' ')
// const c = 'I Love Bangladesh'; //double quotations (" ")
// const d = ` Bangladesh is a beautyfull country`; // backticks (` ` )
// const e = '235621467'; // Number String
// console.log(a, b, c, d, e); //Output= Bangladesh, Md Ataullah,
// // I Love Bangladesh,  Bangladesh is a beautyfull country, 235621467

// //-- Code author © Md Ataullah --

// const a = true;
// const b = false;
// const c = 1 < 3; //True
// const d = 1 > 3; //False
// console.log(a, b, c, d); // Output= true, false, true, false

// //-- Code author © Ataullah --

// let a;
// console.log(a); //Output= Undefined
// const b = {
//   name: 'Ataullah',
// };
// console.log(b.age); //Output= Undefined

// //-- Code author © Md Ataullah --

// const a = null;
// console.log(a); //Output= Null

// //-- Code author © Md Ataullah --

// const symbol1 = Symbol();
// const symbol2 = Symbol();

// console.log(symbol1 === symbol2); // Output: false

// //-- Code author © Md Ataullah --

// const person = {
//   name: 'Ataullah',
//   age: 18,
//   hobbies: ['reading', 'Writing', 'Traveling'],
//   address: {
//     country: 'Bangladesh',
//     city: 'Dhaka',
//     localAddress: {
//       city: 'Barishal',
//     },
//   },
//   identity: function () {
//     console.log(
//       'Hello, my name is ' + this.name + ". I'm form " + this.address.country
//     );
//   },
// };

// person.identity(); //Output: Hello, my name is Ataullah. I'm form Bangladesh
// console.log(person.hobbies); //Output: [ 'reading', 'Writing', 'Traveling' ]
// console.log(person.name); //Output: Ataullah

// const numbers = [3, 5, 46, 7, 78, 5, 8, 67]; //Array type
// console.log(numbers[4]); // Output: 78

// const hobbies = ['reading', 'Writing', 'Traveling']; //Array type
// console.log(hobbies[1]); // Output: Writing

//----------- Code author © Md Ataullah ------------

function funcDataType1(a, b) {
  console.log(a + b); // Output: 50
}
funcDataType1(30, 20);

function funcDataType2() {
  const a = 10;
  const b = 20;
  return a + b;
}
console.log(funcDataType2()); // Output: 30

function funcDataType3(num1, num2) {
  const result = num1 + num2;
  return result;
}
console.log(funcDataType3(7, 3)); // Output: 10
console.log(funcDataType3(20, 5)); // Output: 25
console.log(funcDataType3(100, 500)); //Output: 600

//----------- Code author © Md Ataullah ------------
