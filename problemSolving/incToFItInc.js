// inc To FIt Inc Convert

function incToFitInc(value) {
  //  Intiger Number convert
  const fit = parseInt(value / 12);
  //   Floting number convert
  const inc = value % 12;

  return `Height ${fit}.${inc} Inc.`;
}

console.log(incToFitInc(75));
