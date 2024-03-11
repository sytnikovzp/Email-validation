'use strict';

let email;

const btnOk = document.querySelector('#btn-container > button:last-child');
const emailInput = document.querySelector('#email');

emailInput.addEventListener('change', (e) => {
  email = e.target.value;
});

// ----------------------------------------------------------

const divEmail = document.querySelector('.div-email');
const errormsg = document.createElement('div');
errormsg.classList.add('error-message');
errormsg.textContent = 'Wrong email!';

function emailValid(e) {
  e.preventDefault();
  const reg = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;
  if (reg.test(email)) {
    emailInput.classList.remove('checkValid_invalid');
    emailInput.classList.add('checkValid_valid');
    
    if (emailInput.nextElementSibling) {
      emailInput.nextElementSibling.remove();
    }

    return 'success';
  }

  emailInput.classList.remove('checkValid_valid');
  emailInput.classList.add('checkValid_invalid');
  divEmail.append(errormsg);

  return 'error';
}

emailInput.addEventListener('click', emailValid);
