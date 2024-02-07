function kiloToMile(kilo) {
  if (typeof kilo !== 'number') {
    return 'Please Input a Number of Kilometer';
  }
  let mile = kilo * 0.62137119;
  return `${kilo} Kilo = ${mile} Miles.`;
}
console.log(kiloToMile(100));
