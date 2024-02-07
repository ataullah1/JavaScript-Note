function arrSum(arr) {
  let sum = 0;
  for (const i of arr) {
    // console.log(typeof i);
    if (typeof i === 'undefined') {
      return 'Please input number.';
    } else if (typeof i === 'string') {
      return 'String is not allow. please input number.';
    }
    sum += i;
  }
  return sum;
}

const array = [64, 7, 68, 85, 67, 9, 3, 54, 6, 45];
console.log(arrSum(array));
