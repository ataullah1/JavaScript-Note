const arrow = () => 'hello';
console.log(arrow());

const arrow1 = (a) => 'hello Arrow 1';
console.log(arrow1());

const arrow2 = (a, b, c) => a + b * c;
console.log(arrow2(2, 4, 6));

const arrow3 = (a) => a.age;
const obj = {
  name: 'Ataullah',
  age: 18,
};
console.log(arrow3(obj));

const pi = () => Math.PI;
console.log(pi());

const getMath = (a, b, c, d) => {
  const ab = a;
  const ac = b;
  const ad = c;
  const ae = a + b + c;
  const af = a + b + c + d;
  const ag = ab + ac + ad;
  return af;
};
console.log(getMath(2, 4, 6, 7));

const abc = (a, b, c) => a * b * c;
console.log(abc(2, 3, 4));

console.log('=============');

const x = (a, b = 6) => a + b;
console.log(x(2));
