/**
 * Function takes an array as parameter
 *  give me the average of the odd number in the array.
 */

function oddAvg(numberArr) {
  let oddSum = 0;
  for (const number of numberArr) {
    if (number % 2 === 1) {
      oddSum = number + oddSum;
      let numSize = number.length;
      console.log(numSize);
    }
  }
  //   console.log(oddSum);
  return oddSum;
}
const numArr = [234, 246, 5, 34, 25];
console.log(oddAvg(numArr));
