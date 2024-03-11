'use strict';

let email;

const btnOk = document.querySelector('#btn-container > button:last-child');
const emailInput = document.querySelector('#email');
const divEmail = document.querySelector('.div-email');
const errormsg = document.createElement('div');
errormsg.classList.add('error-message');
errormsg.textContent = 'Wrong email!';

emailInput.addEventListener('change', (e) => {
  email = e.target.value;
});

function emailValid(e) {
  e.preventDefault();
  const reg = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;
  if (reg.test(email)) {
    if (emailInput.nextElementSibling) {
      emailInput.nextElementSibling.remove();
    }
    return 'success';
  }
  divEmail.append(errormsg);
  return 'error';
}

emailInput.addEventListener('blur', emailValid);
