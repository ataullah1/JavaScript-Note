const num = [4, 5, 6, 7, 8, 32];
const player = [42, 34, 67, 89, 53, 74, 83, 56];
const select = player.filter((p) => p > 70);
console.log(select);

const even = player.filter((p) => p % 2 === 1);
console.log(even);
