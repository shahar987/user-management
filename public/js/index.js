/* eslint-disable */

// DOM ELEMENTS

const loginForm = document.querySelector('.form--login');
const resetPassForm = document.querySelector('.form--resetPass');
const forgatPassForm = document.querySelector('.form--forgatPass');
const signupForm = document.querySelector('.form--signup');
const logOutBtn = document.querySelector('.nav__el--logout');

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (resetPassForm)
  resetPassForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = window.location.href.split('/');
    console.log(url);
    const token = url.slice(-1);
    console.log(token);
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    resetPass(password, passwordConfirm, token);
  });

if (forgatPassForm)
  forgatPassForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    forgotPassword(email);
  });

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name, email, password, passwordConfirm);
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);


