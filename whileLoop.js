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

// Task One
// I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this..
let massage = 1;
while (massage <= 60) {
  console.log(massage);
  console.log(
    'I will invest at least 6 hrs every single day for next 60 days!!'
  );
  massage++;
}

// Task two
// Find all the odd numbers from 61 to 100
let oddnum = 61;
while (oddnum <= 100) {
  if (oddnum % 2 === 1) {
    console.log('Odd Number:', oddnum);
  }
  oddnum++;
}

// Task Three
// Find all the even numbers from 78 to 98

let evenNum = 78;
while (evenNum <= 98) {
  if (evenNum % 2 === 0) {
    console.log('Even Number: ', evenNum);
  }
  evenNum++;
}
