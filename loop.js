const fruit = ['Bananna', 'Apple', 'Orange', 'Lemon', 'Water Lemobn'];

for (const fol of fruit) {
  console.log(fol);
  console.log('I Want to eat.');
}

let numbers = 1;
let sum = 0;
while (numbers <= 15) {
  console.log(numbers);
  sum = sum + numbers;
  if (sum % 2 === 0) {
    console.log('Sum', sum);
  }
  numbers++;
}

// I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this..
let massage = 1;
while (massage <= 60) {
  console.log(massage);
  console.log(
    'I will invest at least 6 hrs every single day for next 60 days!!'
  );
  massage++;
}
