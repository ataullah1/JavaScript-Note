/**
 * Sobcea soto number ber korar --------
 *
 */

const heights2 = [167, 190, 120, 165, 137];

function minNumber(arr) {
  let num = arr[0];
  for (const n of arr) {
    if (n < num) {
      num = n;
    }
  }
  return `This array Minimum Number Is: ${num}`;
}

console.log(minNumber(heights2));

console.log('------------------');

const a = [436, 36, 37, 4, 716, 8];

function maxNum(arr) {
  let num = arr[0];
  for (const n of arr) {
    if (n > num) {
      num = n;
    }
  }
  return `This array Maximum Number Is: ${num}`;
}
console.log(maxNum(a));
