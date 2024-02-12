console.log('Amar sonar bangla');

// Delegate// remove child element
//  ay system ta hosse child theke remove korar
/** 
const items = document.getElementsByClassName('item');

// Item for of loop
for (const list of items) {
  // click function call
  list.addEventListener('click', function (event) {
    // removeChild call function
    event.target.parentNode.removeChild(event.target);
  });
}
*/

// ay seystem ta hosse sorasori parent theke child ke delete korar system.
// This is best use

// parent element call
document
  .getElementById('delegateUl')
  .addEventListener('click', function (event) {
    // console.log(event.target.parentNode);
    // Child element remove function
    event.target.parentNode.removeChild(event.target);
  });
// Delegate +++++
// Button call
document.getElementById('btn').addEventListener('click', function () {
  // List tag create
  const listCreate = document.createElement('li');
  //   text added
  listCreate.innerText = 'Item Added';
  //   add for parent this element
  document.getElementById('delegateUl').appendChild(listCreate);
});
