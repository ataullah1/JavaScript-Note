function reveresArr(arr) {
  let rev = [];
  for (const i of arr) {
    rev.unshift(i);
  }
  return rev;
}
const arrays = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5];
console.log(reveresArr(arrays));
