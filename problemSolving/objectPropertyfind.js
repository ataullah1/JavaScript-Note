const colors = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  'golden rod': '#daa520',
};
let a = colors['golden rod'];
console.log(a);

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
};
car['passenger capacity'] = 55;
console.log(car);

const student = {
  name: 'Hamim Sakep',
  id: 5421,
  physics: {
    subject: 'HSC Physics',
    author: 'Shahjahan Tapan',
    marks: 30,
  },
};

console.log(student.physics.marks);
console.log('===========================');

let students = {
  name: 'Ariana Grande',
  age: 21,
  city: 'Gaibandha',
  isStudent: true,
};
let size = 0;
for (const key in students) {
  console.log(key);
  size++;
}
console.log(size);
console.log('==================');

let myObject = {
  name: 'John Doe',
  age: 25,
  city: 'Example City',
  isStudent: true,
};

for (const key in myObject) {
  console.log(`key: ${key} | Type: ${typeof myObject[key]}`);
}
