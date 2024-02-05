let a = '       Amar sonar bangla amit tomay Valobashi.';

console.log(a.trim());
console.log(a.toUpperCase());
console.log(a.toLowerCase());

console.log('------------');

const x = 'Hello';
x[0] = 'h';
console.log(x);
console.log('------------');

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
