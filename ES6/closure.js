const count = () => {
  let count = 0;
  const c = () => {
    count++;
    console.log('Count:', count);
  };
  return c;
};
const call = count();
const call1 = count();
const call2 = count();
const call3 = count();
call(); //  1
call(); //  2
call1(); // 1
call1(); // 2
call1(); // 3
call2(); // 1
call2(); // 2
call3(); // 1
