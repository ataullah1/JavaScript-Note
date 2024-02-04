/**
 * Write a function to find the longest word in a given string.
 *
 * input: I am learning Programming to become a programmer
 *
 * output: Programming
 *
 */

function findWord(value) {
  const textArr = value.split(' ');
  let longest = 0;
  let longestWord = '';
  for (let i = 0; i < textArr.length; i++) {
    if (longest < textArr[i].length) {
      longest = textArr[i].length;
      longestWord = textArr[i];
    }
    // const element = textArr[i].length;
    // console.log(element);
  }
  return `Longest word size: "${longest}" letters And the word is:"${longestWord}"`;
}

const text = 'I am learning Programming to become a programmer';
console.log(findWord(text));
