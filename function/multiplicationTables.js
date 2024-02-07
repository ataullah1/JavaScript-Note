function multiplicationTables(str, end, value) {
  if (
    typeof str !== 'number' ||
    typeof end !== 'number' ||
    typeof value !== 'number'
  ) {
    return 'Please Provide Number Value.';
  }
  let output = '';
  for (let i = str; i <= end; i++) {
    let multi = `${value}×${i} = ${i * value}, `;

    // console.log(multi);
    output += multi;
  }
  return output;
}
let startMultiply = 1;
let endMultiply = 10;
let valueMultiply = 5;

const abc = multiplicationTables(startMultiply, endMultiply, valueMultiply);
console.log(abc);
