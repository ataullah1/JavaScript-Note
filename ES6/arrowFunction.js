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

console.log('=============');
const y = () => {
  const a = ['Foriq', 'sofiqe', 'salam', 'barkat'];
  const b = [];
  for (const nam of a) {
    // console.log(nam.length);
    if (nam.length % 2 === 0) {
      b.push(nam);
    }
  }
  return b;
};
console.log(y());

console.log('===========');
const z = () => {
  const a = [3, 4, 5, 6, 7];
  const len = a.length;
  let sum = 0;
  for (const num of a) {
    const square = num * num;
    sum += square;
  }
  return sum / len;
};
console.log(z());

console.log('==========');
const ac = () => {
  const a = [3, 45, 6];
  const b = [4, 5, 7];
  
};
console.log(ac());
