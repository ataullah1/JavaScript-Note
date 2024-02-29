let num = 0;

const clockId = setInterval(() => {
  num++;
  if (num >= 10) {
    clearInterval(clockId);
  }
  console.log(num);
}, 2000);
