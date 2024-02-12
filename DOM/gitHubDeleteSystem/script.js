console.log('Hello');

// folder create name
const folderName = document.getElementById('folderName');
const fName = document.createElement('p');
fName.id = 'folderTextName';
fName.innerText = 'ataullah.developer';
folderName.appendChild(fName);

// input text box function
document
  .getElementById('inputText')
  .addEventListener('keyup', function (eventText) {
    //  call input text value
    const textValue = eventText.target.value;

    // Call folder name
    const name = document.getElementById('folderTextName').innerText;
    // console.log(name);

    // button call
    const btn = document.getElementById('btnDelete');

    // button enable disabled condition...
    if (textValue === name) {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled', true);
    }
  });

// Button Click then remove input text
document.getElementById('btnDelete').addEventListener('click', function () {
  const inputText = (document.getElementById('inputText').value = '');
});
