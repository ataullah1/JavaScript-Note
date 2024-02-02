function dubbleNum(num) {
  const dbl = num * 2;
  return dbl;
}
const a = dubbleNum(80);
console.log(a);

function odd(oddNum) {
  if (oddNum % 2 === 0) {
    return true;
  }
  return false;
}

console.log(odd(16));
