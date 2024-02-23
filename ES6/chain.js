const data = [{ id: 2, Name: 'Ataullah', Age: 18, adress: 'mogo bari' }];
console.log(data[0]);

console.log('==============');

const parson = {
  id: 1,
  Name: 'Boss',
  sheat: {
    a: 'dhaka',
    adress: {
      presentAdress: 'barguna',
    },
  },
};
console.log(parson.sheat.adress.presentAdress);

console.log('==============');
//Optional chining with object
const parson2 = {
  id: 1,
  Name: 'Boss',
  sheat: {
    a: 'dhaka',
  },
};
console.log(parson2.sheat.adress?.presentAdress);
