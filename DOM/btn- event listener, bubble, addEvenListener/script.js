console.log('Amar Soner Gabla');

// Add onClick Function-----
function redBg() {
  document.body.style.background = 'tomato';
}

// Button Id selector
function blueBg() {
  document.body.style.background = 'pink';
}
const btn = document.getElementById('bkueBtn');
btn.onclick = blueBg; //function ar Call kora jabena.

// Another way---
const btnPurple = document.getElementById('purpleBg');
btnPurple.onclick = function () {
  document.body.style.background = 'purple';
};

// addEventListener for Button background color change.way 01
const btnEven = document.getElementById('hotPinkBtn');
btnEven.addEventListener('click', btnBgHotPink);

function btnBgHotPink() {
  document.body.style.background = 'hotpink';
}
// addEventListener for Button background color change.way 02
const btnGreen = document.getElementById('btnGreen');
btnGreen.addEventListener('click', function () {
  document.body.style.background = 'green';
});

// addEventListener for Button background color change.way 03
// Most useable *****
document.getElementById('btnGold').addEventListener('click', function () {
  document.body.style.backgroundColor = 'gold';
});
