for (let i = 0; i < 50; i++) {
  if (i % 5 !== 0) {
    continue;
  }
  console.log(i);
}

let a = 5;
while (a < 40) {
  a++;
  if (a % 4 !== 0) {
    continue;
  }
  console.log(a);
}
