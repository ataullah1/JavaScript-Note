const sortArr = [235, 64, 75, 8, 9, 690, 68, 456, 45];
sortArr.sort((a, b) => a - b);
console.log(sortArr);

console.log('---------');
const sortArrFlo = [2.34, 1.344, 6.456, 4.234, 9.34];
sortArrFlo.sort((a, b) => a - b);
console.log(sortArrFlo);

console.log('---------');

const sortArrNeg = [
  -6,
  -2,
  -3,
  34.56,
  72.34,
  2.565,
  4 - 98,
  -23,
  -1,
  3,
  6,
  0,
  32,
  6,
];
sortArrNeg.sort((a, b) => a - b);
console.log(sortArrNeg);

console.log('---------');

const textArr = ['afa', 'fg', 'rsr', 'w3ert', 'bsg'];
textArr.sort();
console.log(textArr);
console.log('---------');

const textArrLen = ['afa', 'fg', 'rsr', 'w3ert', 'bsg'];
textArrLen.sort((a, b) => a.length - b.length);
console.log(textArrLen);
console.log('---------');
/** 
function sortArray(arr) {
  //   return arr.slice().sort((a, b) => a - b);
  console.log(arr.slice().sort((a, b) => a - b));
}

// Test with varying lengths and types of arrays
const arrays = [
  [5, 2, 9, 1, 11, 6], // All integers
  [-3, -7, -1, -9, -2], // All negative numbers
  [3.14, 1.618, 2.718, 0.577], // All decimals
];

arrays.forEach((array) => {
  const sortedArray = sortArray(array);
  //   console.log(`Original array: [${array}]`);
  //   console.log(`Sorted array: [${sortedArray}]`);
  //   console.log();
});
*/
function srt(a, b) {
  return a - b;
}
const arr = [2, 5, 78, 2, 4, 11, 3, 1];
function sorted(array) {
  const sored = array;
  /** 
  sored.sort(function (a, b) {
    return a - b;
  }); 
 || or ||
  sored.sort((a, b) => a - b);
  */
  sored.sort((a, b) => a - b);
  return sored;
  //   console.log(sored);
}
console.log(sorted(arr));
