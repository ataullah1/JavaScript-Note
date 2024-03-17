console.log('Hello');
const key = document.getElementById('key');
const value = document.getElementById('value');
const btn = document.getElementById('add');
btn.addEventListener('click', () => {
  if (key.value !== '' && value.value !== '') {
    console.log(key.value, value.value);
    localStorage.setItem(key.value, value.value);
  } else {
    console.log('sorry');
  }
});
