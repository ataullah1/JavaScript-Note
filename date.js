// date dekhar jonno
console.log(new Date());

// amar local date armoto date dekhate
console.log(new Date().toLocaleDateString());

// Local string a dekhte (Best useable)
console.log(new Date().toLocaleString('en-GB'));

// date set kore dite (Tarikh ar mas ay duitake index dite hobe mane agula js 0 theke count kore.)
console.log(new Date(2012, 10, 25));

console.log('------------');
// Cayle notun kpre month day change koreo dea jabe
const date = new Date(2005, 11, 26);
console.log(date);
date.setDate(22);
console.log(date);
date.setMonth(4);
console.log(date);
date.setFullYear(2033);
console.log(date);
