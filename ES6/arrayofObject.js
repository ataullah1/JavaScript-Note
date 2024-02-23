const laptop = [
  {
    name: 'Lenovo',
    price: 40000,
  },
  { name: 'Hp', price: 50000 },
  { name: 'Dell', price: 60000 },
  { name: 'Surfech', price: 70000 },
];
// Name access
const names = laptop.map((product) => product.name);
console.log(names);
// Prices access
const price = laptop.map((prices) => prices.price);
console.log(price);
