/**
 * >>>>>>> Problem <<<<<<<<<<<
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 * sample-input: numbers = [5, 6, 11, 12, 98, 5, , 534, , 6, 57, 5, 24, 5]
 * find: 5
 * output: 4
 */

function repeatedFunc(value) {
  let count = 0;
  for (const numbers of value) {
    if (numbers === 5) {
      count++;
    }
  }
  return `Total 5 this array= ${count} `;
}
const numbers = [5, 6, 11, 12, 98, 5, , 534, , 6, 57, 5, 24, 5];
console.log(repeatedFunc(numbers));
