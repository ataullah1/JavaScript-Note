const ulAppend = document.getElementById('ulAppend');
const btnCal = document.getElementById('buyBtn');
const clearBtn = document.getElementById('clearBtn');
const productName = document.getElementById('productName');
const quantity = document.getElementById('quantity');
let count = 0;

btnCal.addEventListener('click', () => {
  const nam = productName.value;
  const quant = quantity.value;
  if (
    nam !== '' &&
    quantity !== '' &&
    typeof parseInt(quant) === 'number' &&
    !isNaN(parseInt(quant))
  ) {
    localStorageCreate(nam, quant);
    count++;
    const ul = document.createElement('ul');
    ul.className = 'w-full shadow-md shadow-white p-4 grid grid-cols-2 gap-2';
    ul.innerHTML = `<li>${count}. ${nam}</li>
  <li>${quant} Piss</li>`;

    productName.value = '';
    quantity.value = '';
    ulAppend.appendChild(ul);
  }
});

const localStorageFunc = () => {
  let cart = {};
  const localSto = localStorage.getItem('cart');
  if (localSto) {
    cart = JSON.parse(localSto);
  }
  return cart;
};

const localStorageCreate = (name, quantity) => {
  const storage = localStorageFunc();
  storage[name] = quantity;
  console.log(storage);
  const loSto = JSON.stringify(storage);
  localStorage.setItem('cart', loSto);
};

const localStorageDtaDisplay = () => {
  const storage = localStorageFunc();
  for (const nam in storage) {
    const quant = storage[nam];
    console.log(nam, quant);

    count++;
    const ul = document.createElement('ul');
    ul.className = 'w-full shadow-md shadow-white p-4 grid grid-cols-2 gap-2';
    ul.innerHTML = `<li>${count}. ${nam}</li>
  <li>${quant} Piss</li>`;
    ulAppend.appendChild(ul);
  }
};

const clearDtaBtn = () => {
  localStorage.clear();
  ulAppend.innerHTML = '';
  count = 0;
};

// clearDtaBtn();
localStorageDtaDisplay();
