const parson = {
  Name: 'Ataullah',
  Age: 18,
  Color: 'Black',
  isDeveloper: true,
};

// For in loop
for (const key in parson) {
  console.log(key, parson[key]);
}

console.log('============');
// for of loop
const a = Object.keys(parson);
for (const key of a) {
  //   console.log(key);
  //   console.log('=====');
  console.log(key, parson[key]);
}
