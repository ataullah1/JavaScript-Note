const computer = {
  brand: 'HP',
  color: 'Silver',
  price: 35000,
  ssd: '512 GB',
};

function object(obj) {
  return `Laptop Brand Name: ${obj?.brand} . Laptop color ${obj?.color} . Prices ${obj?.price}`;
}
console.log(object(computer));
