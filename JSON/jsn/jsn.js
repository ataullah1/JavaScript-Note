console.log('Hello');

function jsnToObj() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
// ==================================

document.getElementById('btn1').addEventListener('click', function () {
  const link = 'https://jsonplaceholder.typicode.com/posts';
  fetch(link)
    .then((res) => res.json())
    .then((data) => apiCall(data));
  function apiCall(dataList) {
    const ul = document.getElementById('titleList');
    for (const data of dataList) {
      // console.log(data);
      const li = document.createElement('li');
      li.innerText = data.title;
      ul.appendChild(li);
    }
  }
});
