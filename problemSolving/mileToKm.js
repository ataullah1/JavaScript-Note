function mileToKm(value) {
  const km = value * 1.60934;
  return `${value} Mile = ${km} Kilometre.`;
}
console.log(mileToKm(10))