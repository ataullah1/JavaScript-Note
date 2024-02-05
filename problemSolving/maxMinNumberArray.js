let maxMin = [5, 10, 2, 15, 20, 25, 3, 90, 30, 35, 40, 45, 50];

let max = maxMin[0];
let min = maxMin[0];
for (let i = 0; i < maxMin.length; i++) {
  const element = maxMin[i];
  if (max < element) {
    max = element;
  } else if (min > element) {
    min = element;
  }
}

console.log(`Min Number: ${min} || Max Number: ${max}`);

console.log('------------------');
//  Minimum and Maximum Prise for phone in object
const phones = [
  { name: 'Oppo ', price: 25000, camera: '15mp', color: 'Black' },
  { name: 'iPhone ', price: 150000, camera: '15mp', color: 'Black' },
  { name: '1Plus', price: 50000, camera: '15mp', color: 'Black' },
  { name: 'samsung ', price: 70000, camera: '15mp', color: 'Black' },
  { name: 'Walton', price: 19000, camera: '15mp', color: 'Black' },
  { name: 'Xoami', price: 22000, camera: '15mp', color: 'Black' },
];

// minimum price
function phoneMinPrice(phn) {
  let minPrice = phn[0];
  for (const phone of phn) {
    // console.log(phone.price);
    // minimum price condition -------
    if (phone.price < minPrice.price) {
      minPrice = phone.price;
    }
  }
  return minPrice;
}
const minimumPrice = phoneMinPrice(phones);
// Maximum price
function phoneMaxPrice(phn) {
  let maxPrice = phn[0];
  for (const phone of phn) {
    // console.log(phone.price);
    // Maximum price condition --------
    if (phone.price > maxPrice.price) {
      maxPrice = phone.price;
    }
  }
  return maxPrice;
}
const maximumPrice = phoneMaxPrice(phones);

// Final Output
console.log(
  `Here is the cheapest phone: ${minimumPrice} and Here is the most expensive phone: ${maximumPrice}.`
);
