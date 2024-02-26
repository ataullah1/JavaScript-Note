console.log('==');
class Vehicle {
  constructor(nam, pri) {
    this.name = nam;
    this.price = pri;
  }
}
class Bus extends Vehicle {
  constructor(nam, pri, load) {
    super(nam, pri);
    this.load = load;
  }
}

console.log('====Another try for dinamic way=====');
class Owner {
  // nicer name ar color ay duita dileo kono problem nay ar na dileo kono problem nay.... karon ata jehetu object tay constructor theke auto ay property gulo create hoa jay.
  name; // A duita na dileo kaj korbe
  color; // A  duita na dileo kaj korbe
  constructor(nam, age) {
    this.name = nam;
    this.age = age;
  }
  ownerBio = () => {
    console.log(`Owner name is ${this.name}. his age is ${this.age}.`);
  };
}
class Animal extends Owner {
  // nicer name ar color ay duita dileo kono problem nay ar na dileo kono problem nay.... karon ata jehetu object tay constructor theke auto ay property gulo create hoa jay.
  cName; // A duita na dileo kaj korbe
  cColor; // A  duita na dileo kaj korbe
  constructor(catNam, catColor, wName, wAge) {
    super(wName, wAge);
    this.cName = catNam;
    this.cColor = catColor;
  }
  catBio = () => {
    console.log(`Cat name is ${this.cName}. Her hear is ${this.cColor}.`);
  };
}
const cat = new Animal('Travis', 'White', 'Ataullah', 18);
cat.ownerBio();
cat.catBio();
