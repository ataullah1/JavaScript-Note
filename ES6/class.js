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

console.log('==============');

class Animal {
  // nicer name ar color ay duita dileo kono problem nay ar na dileo kono problem nay.... karon ata jehetu object tay constructor theke auto ay property gulo create hoa jay.
  name; // A duita na dileo kaj korbe
  color; // A  duita na dileo kaj korbe
  constructor(nam, color) {
    this.name = nam;
    this.color = color;
  }
  bio = () => {
    console.log(`My name is ${this.name}. My hear is ${this.color}.`);
  };
}
const a = new Animal('Ataullah', 'Black');
const b = new Animal('Rubel', 'Green');
const c = new Animal('Sagor', 'Red');
const d = new Animal('Emran', 'White');
a.bio();
b.bio();
c.bio();
d.bio();
