'use strict';

let email;

const emailInput = document.querySelector('#email');
const btnOk = document.querySelector('#btn-container > button:last-child');



emailInput.addEventListener('change', (e) => {
  email = e.target.value;
});

// ----------------------------------------------------------


