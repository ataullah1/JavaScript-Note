console.log('Hello JavaScript');

document.getElementById('ul').addEventListener('click', function () {
  console.log('ul Element called');
});
document.getElementById('li1').addEventListener('click', function (event) {
  console.log('li 1 Element called');
  //   Bubble stop ------------
  event.stopPropagation();
});
document.getElementById('li1').addEventListener('click', function () {
  console.log('li 1 Element called two');
});
document.getElementById('li1').addEventListener('click', function () {
  console.log('li 1 Element called three');
});
document.getElementById('li2').addEventListener('click', function () {
  console.log('li 2 Element called');
});
document.getElementById('li3').addEventListener('click', function (event) {
  console.log('li 3 Element called one');
  //   Bubble immediate stop-----------
  event.stopImmediatePropagation();
});
document.getElementById('li3').addEventListener('click', function () {
  console.log('li 3 Element called two');
});
document.getElementById('li3').addEventListener('click', function () {
  console.log('li 3 Element called three');
});
