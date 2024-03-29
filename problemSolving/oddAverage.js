/**
 * Function takes an array as parameter
 *  give me the average of the odd number in the array.
 */
// Way 01

function oddAvg(numberArr) {
  let odd = [];
  for (const number of numberArr) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }

  sumOdd = 0;
  for (const oddAvg of odd) {
    sumOdd += oddAvg;
  }
  let oddSize = odd.length;
  const oddAvgOutput = sumOdd / oddSize;
  return `Odd Avearage Number: ${oddAvgOutput}`;
}
const numArr = [
  234, 246, 5, 34, 25, 4, 3, 346, 3, 673, 57, 3457, 46, 457, 468, 456,
];
console.log(oddAvg(numArr));

console.log('------+++++++++------');
//  Way 02

function oddAverage(numberArr) {
  let oddSum = 0;
  let oddSize = [];
  for (const number of numberArr) {
    if (number % 2 === 1) {
      oddSum += number;
      oddSize.push(number);
    }
  }

  const output = oddSum / oddSize.length;
  return output;
}

const num = [25, 5, 5, 35, 3, 6, 5674, 574, 78, 568, 58, 5679, 6759, 67];
console.log(oddAverage(num));
