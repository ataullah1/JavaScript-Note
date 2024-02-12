// HTML text changing way one
console.log('Hello Js');
function changeText() {
  const changingText = document.getElementById('hedText');
  changingText.innerText = 'Onclick button clicked an i am changed.';
}

// HTML text changing way two
document.getElementById('updateText').addEventListener('click', function () {
  document.getElementById('hedText').innerText =
    'Function Onclick actioned Then i am updated text.';
});

// Input text reasiveing and change head text===
document.getElementById('btnSub').addEventListener('click', function () {
  const valueInp = document.getElementById('inputBox');
  const valueText = valueInp.value;
  document.getElementById('inputValueChanging').innerText = valueText;
  valueInp.value = '';
});

// Input text post in paragraph tag ------

document.getElementById('btnPost').addEventListener('click', function () {
  const inputText = document.getElementById('textareaInput');
  const text = inputText.value;

  // create element
  const head = document.getElementById('comment');
  const p = document.createElement('p');
  p.innerText = text;
  head.appendChild(p);

  // Clear comment input box
  inputText.value = '';
});
