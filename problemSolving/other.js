function getLetter(s) {
  const arr = s.split('');
  let letter = '';
  // Write your code here

  if (
    arr[0] === 'a' ||
    arr[0] === 'e' ||
    arr[0] === 'i' ||
    arr[0] === 'o' ||
    arr[0] === 'u'
  ) {
    letter = 'A';
  } else if (
    arr[0] === 'b' ||
    arr[0] === 'c' ||
    arr[0] === 'd' ||
    arr[0] === 'f' ||
    arr[0] === 'g'
  ) {
    letter = 'B';
  } else if (
    arr[0] === 'h' ||
    arr[0] === 'j' ||
    arr[0] === 'k' ||
    arr[0] === 'l' ||
    arr[0] === 'm'
  ) {
    letter = 'C';
  } else {
    letter = 'D';
  }
  return letter;
}

console.log(getLetter('pdfgt'));

const checkEvenLength = (arrOfFriends) => {
  //write your code here
  let a = [];
  for (let name of arrOfFriends) {
    // console.log(name.length)
    if (name.length % 2 === 0) {
      a.push(name);
    }
  }
  return a;
};

console.log(checkEvenLength(['John', 'James', 'Jane', 'Ratul']));

// -------

const findBooks = (arrOfBooks) => {
  //write your code here
  //don't forget to return
  let output = [];
  for (const i of arrOfBooks) {
    if (i.year >= 2000) {
        output.push(i)
    }
  }
  return output;
};
const array = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
  },

  {
    title: 'Harry Potter and the Philosopher Stone',
    author: 'J.K. Rowling',
    year: 1997,
  },

  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
  },
];
console.log(findBooks(array));
