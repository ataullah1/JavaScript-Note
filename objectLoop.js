const mobile = {
  model: 'iPhone',
  color: 'White',
  ram: '8GB',
  price: '99000',
};

for (const i in mobile) {
  if (mobile.hasOwnProperty.call(mobile, i)) {
    const element = mobile[i];
    console.log(element);
  }
}

console.log('===============');

for (const key in mobile) {
  const element = mobile[key];
  console.log(key, ':', element);
}
console.log('===============');

const key = Object.keys(mobile);
console.log(key);

for (const i of key) {
  const element = mobile[i];
  console.log(i, ':', element);
}
