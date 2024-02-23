const laptop = [
  {
    name: 'Lenovo',
    price: 40000,
  },
  { name: 'Hp', price: 50000 },
  { name: 'Dell', price: 60000 },
  { name: 'Surfech', price: 70000 },
];

//Has some properties , method
class Product {
  country = 'Bangladesh';
  speak(talk) {
    console.log(`Talking about ${talk}`);
  }
}
const lenovo = new Product();
console.log(lenovo);
lenovo.speak('Oma kita kow');

console.log('=============');

class Teacher {
  constructor(nam, sub) {
    this.name = nam;
    this.subject = sub;
  }
  teaching() {
    console.log("Hello gaise i'm teaching ICT");
  }
}
const abc = new Teacher('Ataullah', 'ICT');
console.log(abc);
