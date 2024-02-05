/**
 * Jodi Array ar modde aky man duiber theake tyle duplicate value ta false hoa iutput asbena
 */
// String ar jonno

function unicArr(arr) {
  let unicArrValue = [];
  for (const array of arr) {
    if (unicArrValue.includes(array) === false) {
      unicArrValue.push(array);
    }
  }
  return unicArrValue;
}
const arrValue = ['Abul', 'Babul', 'Cabul', 'Abul', 'Tabul', 'Cabul'];
console.log(unicArr(arrValue));

// Number ar jonno

function dupNum(value) {
  nonDuplicateNum = [];
  for (const item of value) {
    if (nonDuplicateNum.includes(item) === false) {
      nonDuplicateNum.push(item);
    }
  }
  return `Final Non Duplicate Number Array= ${nonDuplicateNum}`;
}

const duplicateArr = [23, 24, 23, 22, 23];
console.log(dupNum(duplicateArr));


