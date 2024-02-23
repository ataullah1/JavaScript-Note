const parson = {
  Name: 'Ataullah',
  Age: 18,
  Color: 'Black',
  isDeveloper: true,
};
// Object keys access
const parsonKeys = Object.keys(parson);
console.log(parsonKeys);

// Object value access
const parsonValues = Object.values(parson);
console.log(parsonValues);

// array of array or two dimensional array
const parsonEntries = Object.entries(parson);
console.log(parsonEntries);
