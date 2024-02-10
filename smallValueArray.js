const array = [10, 33, 5, 99, 6];
function smallNumber(arr) {
  let smallNum = arr[0];
  for (const number of arr) {
    if (number < smallNum) {
      smallNum = number;
    }
  }
  return smallNum;
}
console.log(smallNumber(array));

// var array = [2, 3, 1, 9, 8];
// var minvalue = array[0];
// for (var i = 0; i < array.length; i++) {
//   if (array[i] < minvalue) {
//     minvalue = array[i];
//   }
// }
// console.log(minvalue);
console.log('----------');
