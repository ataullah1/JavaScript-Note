// Variable ar Value aktar ta onnoty jabe (mane a ar value b te jabe ar b ar value a te jabe )

// Way one

let a = 5;
let b = 9;

console.log(a, b);
let temp = a;
a = b;
b = temp;
console.log(a, b);

console.log('----------');
// Way two
let x = 4;
let y = 8;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);
