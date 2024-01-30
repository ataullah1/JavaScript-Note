let maxMin = [5, 10, 2, 15, 20, 25, 90, 30, 35, 40, 45, 50];

let max = maxMin[0];
let min = maxMin[0];
for (let i = 0; i < maxMin.length; i++) {
  const element = maxMin[i];
  if (max < element) {
    max = element;
  } else if (min > element) {
    min = element;
  }
}

console.log(`Min Number: ${min} || Max Number: ${max}`);
