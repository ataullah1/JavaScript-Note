/**
 * Write a function to convert temperature from Celsius to Fahrenheit.
 * Formula>>	(°C × 9/5) + 32 = °F
 */

function convert(value) {
  const formula = (value * 9) / 5 + 32;
  return `>> ${value}°C = ${formula}°F`;
}

console.log(convert(1));

console.log('-------------------');


