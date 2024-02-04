/**
 * Function takes an array as parameter
 *  give me the average of the Even number in the array.
 */
// Way 01

function evenAvg(numberArr) {
  let even = [];
  for (const number of numberArr) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }

  sumEven = 0;
  for (const evenAvg of even) {
    sumEven += evenAvg;
  }
  let evenSize = even.length;
  const evenAvgOutput = sumEven / evenSize;
  return `Even Average Number: ${evenAvgOutput}`;
}
const numArr = [
  234, 246, 5, 34, 25, 4, 3, 346, 3, 673, 57, 3457, 46, 457, 468, 456,
];
console.log(evenAvg(numArr));

console.log('------+++++++++------');
//  Way 02

function evenAverage(numberArr) {
  let evenSum = 0;
  let evenSize = [];
  for (const number of numberArr) {
    if (number % 2 === 0) {
      evenSum += number;
      evenSize.push(number);
    }
  }

  const output = evenSum / evenSize.length;
  return output;
}

const num = [25, 5, 5, 35, 3, 6, 5674, 574, 78, 568, 58, 5679, 6759, 67];
console.log(evenAverage(num));
