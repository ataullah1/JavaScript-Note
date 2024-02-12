/** 

const main = document.getElementById('main');

// Create section
const section3 = document.createElement('section');
section3.id = 'secThree';
main.appendChild(section3);
section3.style.background = '#684B4C';
section3.style.color = '#fff';
section3.style.textAlign = 'center';
section3.style.padding = '25px';
section3.style.border = '6px solid #3DCB9D';
section3.style.borderRadius = '20px';
section3.style.marginTop = '30px';

// Create section head
const h1 = document.createElement('h1');
h1.innerText = 'Section Three Creating By Js';
// H1 append section 3
section3.appendChild(h1);

// P Tag Create =
const p = document.createElement('p');
p.innerText = 'This is section three part creating by JavaScript.';
// p tag append section 3
section3.appendChild(p);

// ul Tag Create -----
const sec3Ul = document.createElement('ul');
sec3Ul.id = 'secThreeUl';
section3.appendChild(sec3Ul);

// Li Tag append for UI

function sec3Items(item) {
  const li = document.createElement('li');
  li.innerText = item;
  sec3Ul.appendChild(li);
}
sec3Items('Section Item One');
sec3Items('Section Item Two');
sec3Items('Section Item Three');
sec3Items('Section Item Three Move To Section Fore');

// Section Fore Create-------++++++++++-------
const section4 = document.createElement('section');
section4.id = 'secFore';
main.appendChild(section4);
section4.style.background = '#669382';
section4.style.color = '#fff';
section4.style.textAlign = 'center';
section4.style.padding = '25px';
section4.style.border = '6px solid #3DCB9D';
section4.style.borderRadius = '20px';
section4.style.marginTop = '30px';

// Create section head
const sec4h1 = document.createElement('h1');
sec4h1.innerText = 'Section Fore Creating By Js';
// H1 append section 3
section4.appendChild(sec4h1);

// P Tag Create =
const sec4p = document.createElement('p');
sec4p.innerText = 'This is section fore part creating by JavaScript.';
// p tag append section 3
section4.appendChild(sec4p);

// ul Tag Create -----
const sec4Ul = document.createElement('ul');
sec4Ul.id = 'secForeUl';
section4.appendChild(sec4Ul);

// Li Tag append for UI

function sec4Items(item) {
  const li = document.createElement('li');
  li.innerText = item;
  sec4Ul.appendChild(li);
}
sec4Items('Section Fore Item One');
sec4Items('Section Fore Item Two');
sec4Items('Section Fore Item Three');
sec4Items('Section Fore Item Three Move To Section Three');

// Element Moving
const secUlThree = document.getElementById('secThreeUl').lastElementChild;
const secUlFore = document.getElementById('secForeUl');
secUlFore.appendChild(secUlThree);

// Element Moving
const secUlFore2 = document.getElementById('secForeUl').lastElementChild;
const secUlThree2 = document.getElementById('secThreeUl');
secUlThree2.appendChild(secUlFore2);

*/
