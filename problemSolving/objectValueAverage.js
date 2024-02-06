const phones = [
  { model: 'PhoneA', brand: 'Iphone', price: 95000 },
  { model: 'PhoneB', brand: 'Samsung', price: 40000 },
  { model: 'PhoneC', brand: 'Oppo', price: 26000 },
  { model: 'PhoneD', brand: 'Nokia', price: 35000 },
  { model: 'PhoneE', brand: 'Iphone', price: 105000 },
  { model: 'PhoneF', brand: 'HTC', price: 48000 },
];

function findAveragePhonePrice(arr) {
  let priceSum = 0;
  let priceLen = 0;
  for (const i in arr) {
    const prices = arr[i].price;
    // console.log(phones.length);
    priceLen += i.length;
    priceSum += prices;
  }
  //   console.log(priceSum);
  //   console.log(priceLen);
  const avg = priceSum / priceLen;
  return `Total phone price:${priceSum} tk. Total Phones: ${priceLen} piss and Average price of phone: ${avg.toFixed(
    2
  )} tk.`;
}

console.log(findAveragePhonePrice(phones));
