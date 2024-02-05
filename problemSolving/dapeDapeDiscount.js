/**
 * Total 3 ta dap thakbe jemon....
 * jodi kew 100 ta  othoba 100 ar kom product kine tyle oner jonno amar product ar dam porbe 100 tk kore.
 * and kkew  jodi 100 ar upre product kine and 200 ar kom kine ter jonno dam hobe 100 ta 100 tk korey and baki 100 ta 90 tk kore .
 * ar kew jodi 200 tero upre product nay tyle ter jonno price hobe 80 tk kore. and ter modde prothom 100 ta 100 tk kore ditio 100 ta 90 tk kokre and last 100 ta 80 tk kore hobe .
 *
 */

function discount(quantity) {
  const firstPrice = 100;
  const secondPrice = 90;
  const thirdPrice = 80;

  if (quantity <= 100) {
    const totalPrice = quantity * firstPrice;
    return `Your Total Price: ${totalPrice} Tk.`;
  } else if (quantity <= 200) {
    const first100Total = firstPrice * 100;
    const secondQuantity = quantity - 100;
    const secondPriceTotal = secondQuantity * secondPrice;
    const totalPrice = first100Total + secondPriceTotal;
    return `Your Total Price: ${totalPrice} Tk.`;
  } else {
    const first100Total = firstPrice * 100;
    const second100Total = secondPrice * 100;
    const thirdQuantity = quantity - 200;
    const thirdPriceTotal = thirdQuantity * thirdPrice;
    const totalPrice = first100Total + second100Total + thirdPriceTotal;
    return `Your Total Price: ${totalPrice} Tk.`;
  }
}

const productQuantity = 260;
console.log(discount(productQuantity));
