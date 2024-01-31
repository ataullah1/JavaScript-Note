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
