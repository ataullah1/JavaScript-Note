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
