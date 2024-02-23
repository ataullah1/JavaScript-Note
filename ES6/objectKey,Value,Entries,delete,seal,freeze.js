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

//delete object keys or property
delete parson.isDeveloper;
console.log(parson);

console.log('============');

// object copy
const { Color, ...newObj } = parson;
const { ...sameObjNewCopy } = parson;
console.log(parson);
console.log(newObj);
console.log(sameObjNewCopy);

// Object freeze
Object.freeze(parson); // object ta freeze hoa jabe
Object.seal(parson); // freeze ar poriborte ata use korle ja add korbo ta add hobe but delete hobe.
//nicer variable ar konoty kaj hobena, becouse parson object ta freeze hoa gese
parson.wife = 'sokina';
delete parson.Age;
console.log(parson);

//
