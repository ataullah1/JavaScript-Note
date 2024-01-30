let prise = [5, 120, 125, 204, 245, 370, 315, 40, 145, 450];
let discount = [];

for (let i = 0; i < prise.length; i++) {
  const element = prise[i];
  if (element > 150) {
    let discountPrise = element - (element * 10) / 100;
    discount.push(discountPrise);
  } else {
    discount.push(element);
  }
}
console.log(discount);
