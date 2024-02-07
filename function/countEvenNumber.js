function countEvens(str, end) {
  let output = [];
  for (let i = str; i <= end; i++) {
    if (i % 2 === 0) {
      output.push(i);
    }
  }
  return output.join('/');
}
console.log(countEvens(5, 100));
