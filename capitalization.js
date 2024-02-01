let text =
  'amaDer A deShe hbe sEy a cElE kObe i E A C koThay nA boRo hoA kAje bOro hBe.';
let capita = text.split(' ');
for (let i = 0; i < capita.length; i++) {
  capita[i] = capita[i][0].toUpperCase() + capita[i].slice(1).toLowerCase();

  if (capita[i].length === 1) {
    capita[i] = capita[i].toLowerCase();
  }
}
let output = capita.join(' ');
console.log(output);
