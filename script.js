const form = document.querySelector('form');
const firstImage = document.querySelector('#first-error-image');
const lastImage = document.querySelector('#last-error-image');
const emailImage = document.querySelector('#email-error-image');
const passwordImage = document.querySelector('#password-error-image');
const firstError = document.querySelector('#first-name-error');
const lastError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

const firstInput = document.querySelector('#firstName');
const lastInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');



form.addEventListener('submit', first);
form.addEventListener('submit', last);
form.addEventListener('submit', email);
form.addEventListener('submit', pass);


function first(event) {
    event.preventDefault();

    const firstName = firstInput.value.trim();
    console.log(firstName)

    if (firstName === '') {
        firstError.style.visibility = 'visible';
        firstImage.style.visibility = 'visible';
    } else {
        firstError.style.visibility = 'hidden';
        firstImage.style.visibility = 'hidden';
    }
}

function last(event) {
    event.preventDefault()

    const lastName = lastInput.value.trim();
    console.log(lastName);

    if (lastName === '') {
        lastError.style.visibility = 'visible';
        lastImage.style.visibility = 'visible';
    } else {
        lastError.style.visibility = 'hidden';
        lastImage.style.visibility = 'hidden';
    }
}

function email(event) {
    event.preventDefault();

    const emailIn = emailInput.value.trim();
    console.log(emailIn);

    if (emailIn === '' || !checkEmail(emailIn)) {
        emailError.style.visibility = 'visible';
        emailImage.style.visibility = 'visible';
    } else {
        emailError.style.visibility = 'hidden';
        emailImage.style.visibility = 'hidden';
    }
}

function pass(event) {
    event.preventDefault();

    const password = passwordInput.value.trim();
    console.log(password);

    if (password === '') {
        passwordError.style.visibility = 'visible';
        passwordImage.style.visibility = 'visible';
    } else {
        passwordError.style.visibility = 'hidden';
        passwordImage.style.visibility = 'hidden';
    }
}



function checkEmail(input) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}