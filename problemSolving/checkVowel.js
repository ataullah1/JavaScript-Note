let a = 'Amar Sonar Bangla Ami tomay Valobashi eu';
a = a.toLowerCase();
if (
  a.includes('a') &&
  a.includes('e') &&
  a.includes('i') &&
  a.includes('o') &&
  a.includes('u')
) {
  // All vowels are present in the string
  console.log('All vowels are present in the string');
} else {
  // At least one of the vowels is missing in the string
  console.log('At least one of the vowels is missing in the string');
}

console.log('==================================');

const numbers = [5, 4, 3, 2, 1];
const index=numbers.indexOf(3)
console.log(numbers[index])

// if (
//   (a.includes('a') || a.includes('A')) &&
//   (a.includes('e') || a.includes('E')) &&
//   (a.includes('i') || a.includes('I')) &&
//   (a.includes('o') || a.includes('O')) &&
//   (a.includes('u') || a.includes('U'))
// ) {
//   // All vowels are present in the string
//   console.log('All vowels are present in the string');
// } else {
//   // At least one of the vowels is missing in the string
//   console.log('At least one of the vowels is missing in the string');
// }
// console.log(a);
