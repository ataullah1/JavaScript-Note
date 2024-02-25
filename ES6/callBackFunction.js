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
