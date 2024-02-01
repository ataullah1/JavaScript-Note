let text =
  'amaDer a deShe hbe sEy a cElE kObe i koThay nA boRo hoA kAje bOro hBe.';
let textSplit = text.split(' ');
// console.log(textSplit);

for (let i = 0; i < textSplit.length; i++) {
  textSplit[i] =
    textSplit[i][0].toUpperCase() + textSplit[i].slice(1).toLowerCase();
  if (textSplit[i].length == 1) {
   
    textSplit[i].toLowerCase();
  }
  //   console.log(textSplit[i].length);
}
let a = textSplit.join(' ');
console.log(a);
// console.log(textSplit);
