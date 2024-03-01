console.log(1);
console.log(2);
console.log(3);
setTimeout(() => {
  console.log(4);
}, 2000);
console.log(5);

const mss = () => {
  setTimeout(() => {
    console.log('Hello Ataullah');
  }, 5000);
};

mss();
