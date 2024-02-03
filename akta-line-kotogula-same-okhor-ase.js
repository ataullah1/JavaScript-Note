function count_zero(binary) {
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      count++;
    }
  }
  return count;
}

const cnt = '1011010101110000001010101';
const zero_count = count_zero(cnt);
console.log(zero_count);
