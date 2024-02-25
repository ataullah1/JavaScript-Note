//Array spread
const a = [1, 32, 6, 7, 74];
const b = [...a];
a.push(132);
b.push(547);
console.log(a, b);

//Object Spread
const parson = {
  name: 'Ataullah',
  sub: 'English',
  num: 22346374,
};

const parson1 = { ...parson };
parson1.adress = 'Barguna';
console.log(parson);
console.log(parson1);
