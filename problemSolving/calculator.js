function add(add1, add2) {
  return add1 + add2;
}
function subtract(add1, add2) {
  return add1 - add2;
}
function multiply(add1, add2) {
  return add1 * add2;
}
function divide(add1, add2) {
  return add1 / add2;
}

function calculator(a, b, operator) {
  if (operator === 'sum') {
    return add(a, b);
  } else if (operator === 'subtract') {
    return subtract(a, b);
  } else if (operator === 'multiply') {
    return multiply(a, b);
  } else if (operator === 'divide') {
    return divide(a, b);
  } else {
    return 'Please Input Valid Input';
  }
}
const w = 'sum';
const x = 'subtract';
const y = 'multiply';
const z = 'divide';
const opret = y;
const output = calculator(5, 4, opret);
console.log(output);
