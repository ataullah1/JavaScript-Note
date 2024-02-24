function counting() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c = counting();
// protekber call korle 1 kore barbe
console.log(c()); //1
console.log(c()); //2
console.log(c()); //3
console.log(c()); //4
