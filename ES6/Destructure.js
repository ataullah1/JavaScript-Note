console.log('Hello');
const actor = {
  name: 'Sakib',
  age: 53,
  phone: '017282829',
};
const phn = actor.phone;
console.log(phn);

// destructuring object
console.log('Hello');
const player = {
  name: 'Sakib',
  age: 50,
  phone: '01234282829',
  mony: '33',
};
const { age, phone, mony: bow } = player;
console.log(age);
console.log(phone);
console.log(bow);

//destructuring array
const arr = [32, 456];
const [first, second] = arr;
const [a, b] = [12, 66];
console.log(arr);
console.log(first);
console.log(a);
console.log(b);

//destructuring function
function destr(a, b) {
  return [a * 3, b * 3];
}
console.log(destr(3, 4));
const [one, two] = destr(4, 5);
console.log(one);
console.log(two);
console.log(one, two);

const ab = [3, 4, 6, 76, 456, 6787, 3463];
const [aa, ac, ad, ...ae] = ab;
console.log(aa, ac, ad, ae);

const obj = {
  nam: 'ataullah',
  roll: 35,
  class: 'intermidate',
  adress: {
    local: 'bamna',
    city: {
      town: 'barguna',
      division: {
        bivag: 'barishal',
      },
    },
  },
};
const {
  adress: {
    city: { division },
  },
} = obj;
console.log(division);

console.log('============');
const person = {
  name: 'Ataullah',
  age: 18,
};
const showInfo = ({ name, age }) => console.log(`Name: ${name}, Age: ${age}`);
showInfo(person);

// console.log(showInfo);
