let num = 0;

const clockId = setInterval(() => {
  num++;
  if (num >= 10) {
    clearInterval(clockId);
  }
  console.log(num);
}, 2000);

const mass = (nam, time) => {
  setInterval(() => {
    console.log('hello,', nam);
  }, time);
};

mass('Alisha!', 2000);
