let h1 = document.getElementById('heading-h1');
h1.style.textAlign = 'center';
h1.style.color = 'green';
h1.style.fontSize = '50px';

const div1 = document.getElementById('div1');
div1.style.textAlign = 'center';
div1.style.background = 'gray';
div1.style.padding = '10px';

//  List append -----------
const list = document.getElementById('list');
list.style.listStyle = 'none';
const createAttr = document.createElement('li');
createAttr.innerText = 'Hello I am Md Ataullah';
list.appendChild(createAttr).style.textAlign = 'center';

// section1tion append =============

const main = document.getElementById('main');

const section1 = document.createElement('section');
section1.style.textAlign = 'center';
section1.style.backgroundColor = 'gray';
section1.style.marginTop = '20px';
section1.style.padding = '20px';
section1.style.borderRadius = '20px';
section1.style.border = '5px solid red';

const section1H1 = document.createElement('h1');
section1H1.innerText = 'Section one Create by Js';
section1.appendChild(section1H1);

const section1Ul = document.createElement('ul');
// Id Create---------
section1Ul.id = 'ul';

const li1 = document.createElement('li');
li1.innerText = 'Js Creating Li 1';
section1Ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Js Creating Li 2';
section1Ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Js Creating Li 3';
section1Ul.appendChild(li3);

section1.appendChild(section1Ul);
main.appendChild(section1);

//  Set Inner HTML Directly
const section2 = document.createElement('section');
section2.style.textAlign = 'center';
section2.style.backgroundColor = '#002B36';
section2.style.color = '#fff';
section2.style.marginTop = '20px';
section2.style.padding = '20px';
section2.style.borderRadius = '20px';
section2.style.border = '5px solid #DBD27B';

section2.innerHTML =
  '<h1>Section two Create by Js</h1> <ul><li>List one</li><li>List two</li><li>List Three</li></ul>';

main.appendChild(section2);

// Element Moving -----------+++++++++++--------

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
const sec3H1 = document.createElement('h1');
sec3H1.innerText = 'Section Three Creating By Js';
// H1 append section 3
section3.appendChild(sec3H1);

// P Tag Create =
const sec3p = document.createElement('p');
sec3p.innerText = 'This is section three part creating by JavaScript.';
// p tag append section 3
section3.appendChild(sec3p);

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
