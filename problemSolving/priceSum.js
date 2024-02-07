function calculateElectronicsBudget(lap, tab, mob) {
  const sum = lap + tab + mob;
  return `Total money ${sum} tk.`;
}

const tablet = 15000;
const mobile = 20000;
const laptop = 35000;
console.log(calculateElectronicsBudget(tablet, mobile, laptop));
