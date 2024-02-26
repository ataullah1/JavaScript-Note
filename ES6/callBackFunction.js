console.log('======');
function abc(a, n) {
  a(n);
}
function abb(e) {
  console.log('hello janu', e);
}

abc(abb, 'Ataullah');
abc(abb, 'Javascript');
abc(abb, 'programming');

console.log('===============');
//Call back function
const callBack = (name, age) => {
  console.log(`My name is ${name}. I'm ${age} years old.`);
};
const at = (call, nam, ag) => {
  call(nam, ag);
};
call = at(callBack, 'Ataullah', 18);
call = at(callBack, 'Rafiq', 20);
call = at(callBack, 'Sofiq', 30);
// console.log(callBack);
