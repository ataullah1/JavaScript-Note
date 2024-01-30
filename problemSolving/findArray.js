let findArray = ['Banana', 'Apple', 'Coconut', 'Grape', 'Mango'];
let find = 'Mango';
let findIndex;

for (let i = 0; i < findArray.length; i++) {
  const element = findArray[i];
  if (element === find) {
    findIndex = i;
  }
}
if (findIndex >= 0) {
  console.log(findIndex, 'Is Founded');
} else {
  console.log('Your input is not founded');
}
