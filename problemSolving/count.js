let text = 'amar sonar bangla ami atomay vlobashi';

let count = 0;

for (let i = 0; i < text.length; i++) {
  const element = text[i];
  if (element === 'a') {
    count++;
  }
}
console.log(count);

const aaa = 'Amar sonar bAnglAaa ami tomAy ValobAshi';

let counta = 0;
for (let i = 0; i < aaa.length; i++) {
  const element = aaa[i];
  if (element === 'a' || element === 'A') {
    counta++;
  }
}
console.log(counta);
console.log('-------------------');

/**
 * Problem= Write a function to count the number of vowels in a string.
 * Vowels= a,e,i,o,u
 */

function vowelsCount(text) {
  let count = 0;
  for (const string of text.toLowerCase()) {
    if (
      string === 'a' ||
      string === 'e' ||
      string === 'i' ||
      string === 'o' ||
      string === 'u'
    ) {
      count++;
    }
  }
  return count;
}

let stringText = 'Write a function to count the number of vowels in a string.';
console.log(vowelsCount(stringText));
