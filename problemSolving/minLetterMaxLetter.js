// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function minLetter(arr) {
  let str = arr[0];
  for (const words of arr) {
    if (words.length < str.length) {
      str = words;
    }
  }
  return ` Smallest name is: ${str}`;
}

console.log(minLetter(heights2));

// console.log('-------=======----');

// function findShortestString(arr) {
//   if (arr.length === 0)
// for (const words of arr) {
//     if (words.length<str.length) {
//         str=words
//     }
// }{
// //     return 'Array is empty';
// //   }

// //   let shortest = arr[0];
// for (const words of arr) {
//     if (words.length<str.length) {
//         str=words
//     }
// }

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length < shortest.length) {
//       shortest = arr[i];
//     }
//   }

//   return shortest;
// }

// // Example usage:
// const stringArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
// const shortestString = findShortestString(stringArray);

// console.log('Shortest string:', shortestString);
