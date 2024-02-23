const maxNum = Math.max(32, 56234, 6734, 57, 46);
console.log(maxNum);

//Spread operator

const maxArr = [2, 5, 6, 7, 64, 234];
const maxNumArr = Math.max(...maxArr);
console.log(maxNumArr);

//Spread Operator to copy

const fri = [15, 67, 34];
const bondu = fri;
const dosto = [...fri, 999];
bondu.push(45);
dosto.push(500);
console.log(fri);
console.log(dosto);
