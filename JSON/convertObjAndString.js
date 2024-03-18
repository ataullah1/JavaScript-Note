const jsn = {
  name: 'Kodu Azad',
  age: 29,
  adress: {
    name: 'Kocukhet',
    mitter: 234,
  },
};
const a = JSON.stringify(jsn);
const b = JSON.parse(a);
console.log('A Data==', a);
console.log('B Data==', b);
