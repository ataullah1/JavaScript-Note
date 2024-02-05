const product = [
  { name: 'Shampoo', price: 300, quantity: 2 },
  { name: 'Crime', price: 200, quantity: 1 },
  { name: 'Lipistic', price: 100, quantity: 1 },
  { name: 'Mecup', price: 350, quantity: 1 },
  { name: 'Loson', price: 450, quantity: 1 },
];

function total(product) {
  priceSum = 0;
  quantitySum = 0;
  for (const products of product) {
    // console.log(prices);
    quantitySum += products.quantity;
    const totalCost = products.price * products.quantity;
    // console.log(totalCost);
    priceSum += totalCost;
  }
  return `Bow Aj Total Maljinis Kinse: ${quantitySum} Ta and Amake Khyce: ${priceSum} TK.`;
}

console.log(total(product));
