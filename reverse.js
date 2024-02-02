// For of loop ========

const a = 'I am a web developer.';
let reveres = '';

for (const singleLetter of a) {
  console.log(singleLetter);
  reveres = singleLetter + reveres;
  console.log(reveres);
}
console.log(reveres);
console.log(a);

console.log('==================');

// For loop  =======

const b = 'I am a web developer.';
let reveresFor = '';
for (let i = 0; i < b.length; i++) {
  const singleLetter = b[i];
  reveresFor = singleLetter + reveresFor;
}
console.log(reveresFor);

console.log('===========================');

// Shortcut way ====================

const c = 'I am a web developer.';
const d = c.split('').reverse().join('');
console.log(d);

console.log('===================');
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.reverse();
console.log(num);

console.log('=================');
let nam = ['a', 'b', 'c', 'd', 'e'];
nam.reverse();
console.log(nam);
console.log('=====================');

let naaaam = ['a', 'b', 'c', 'd', 'e'];
let rev_nam = [];
for (const abc of naaaam) {
  // console.log(abc);
  rev_nam.unshift(abc);
}
console.log(rev_nam);

console.log('=====================');

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let aColor = colors.reverse();
console.log(aColor);

console.log('=======String word Reverse ============');
const statement = 'I am a hard working person';
let statementRev = statement.split(' ').reverse().join(' ');
console.log(statementRev);

console.log('=======String word Reverse for looping ============');
const statementText = 'I am a hard working person';
let statementLoop = statementText.split(' ');
let rev_wordLoop = '';
for (let i = statementLoop.length - 1; i >= 0; i--) {
  // console.log(statementLoop[i]);
  rev_wordLoop += statementLoop[i] + ' ';
}

// rev_wordLoop = rev_wordLoop.trim();
console.log(rev_wordLoop);
