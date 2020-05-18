    // button sign up activation
const check = document.querySelector('.signup__checkbox');
const cover =document.querySelector('.signup__submit');

function stow(){
    cover.classList.toggle('active');
}
check.addEventListener('click', stow);

    // variables
const formSignUp = document.querySelector('#signup');
const formLogin = document.querySelector('#login');
const errorsBox = document.querySelector('#errors');


    // listening
formSignUp.addEventListener('submit', validateSignuUp);
formLogin.addEventListener('submit', validateLogin);

const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // for formSignUp
const firstName = document.querySelector('.signup__first-name');
const lastName = document.querySelector('.signup__last-name');
const userName = document.querySelector('.signup__username');
const email = document.querySelector('.signup__email');
const password = document.querySelector('.signup__password');
const checkbox = document.querySelector('.signup__checkbox')
    // for formLogin
const emailLog = document.querySelector('.login__email');
const passwordLog = document.querySelector('.login__password');

    // check function
function validateSignuUp() {
    event.preventDefault();

    let errors = [];

    if (firstName.value.length < 3) {
        errors.push({text: 'first name', el: firstName});
    }

    if (lastName.value.length < 3) {
        errors.push({text: 'last name', el: lastName});
    }
    if (userName.value == '') {
        errors.push({text: 'user name', el: userName});
    }
    if (email.value == '') {
        errors.push({text: 'email', el: email});
    } else if (!regEmail.test(email.value)) {
        errors.push({text: 'email', el: email});
    }
    if (password.value == '') {
        errors.push({text: 'password', el: password});
    } else if (!regPass.test(password.value)) {
        errors.push({text: 'password', el: password});
    }
    if (checkbox.checked === false) {
        errors.push({text: 'agree', el: checkbox});
    }

    if (errors.length > 0) {
        showErrors(errors);
        return false;
    }
    showOK();
    console.log('done');
    return true;
}

    function validateLogin() {
        event.preventDefault();

        let errors = [];

        if (emailLog.value == '') {
            errors.push({text: 'email', el: emailLog});
        } else if (!regEmail.test(emailLog.value)) {
            errors.push({text: 'email', el: emailLog});
        }

        if (passwordLog.value == '') {
            errors.push({text: 'password', el: emailLog});
        } else if (!regPass.test(passwordLog.value)) {
            errors.push({text: 'password', el: passwordLog});
        }
        
        if (errors.length > 0) {
            showErrors(errors);
            console.log('zle');
            
            return false;
        }
        showOK();
        console.log('dobrze');
        return true;
    }

    // showing function
function showErrors(erro) {
    let message = 'You have errors with the following fields: ';

    erro.map((err, idx) => {
        err.el.classList.add('error');
        if (erro.length == idx+1) {
            message += err.text
        } else {
            message += err.text + ', '
        }
    });


    erro[0].el.focus();

    const errorText = document.createElement('div');
    errorText.classList.add('error');
    errorText.innerText = message;


    errorText.addEventListener('click', function () {
        errorsBox.removeChild(errorText);
    });
    errorsBox.appendChild(errorText);
}
function showOK() {
    let message = 'No errors';

    const errorText = document.createElement('div');
    errorText.classList.add('error');
    errorText.innerText = message;
    errorsBox.appendChild(errorText);

    errorText.addEventListener('click', function () {
        errorsBox.removeChild(errorText);
       });
}

        // dynamic check inputs

firstName.addEventListener('input', function(){

    if (event.target.name == 'firstname') {
        if (event.target.value.length >= 3) {
            event.target.classList.add('valid');
            event.target.classList.remove('invalid');
        } else {
             event.target.classList.add('invalid');
             event.target.classList.remove('valid');
        }
    }
});
lastName.addEventListener('input', function(){

    if (event.target.name == 'lastname') {
        if (event.target.value.length >= 3) {
            event.target.classList.add('valid');
            event.target.classList.remove('invalid')
        } else {
            event.target.classList.add('invalid');
            event.target.classList.remove('valid');
        }
    }
});
userName.addEventListener('input', function(){

    if (event.target.name == 'username') {
        if (event.target.value.length >= 3) {
            event.target.classList.add('valid');
            event.target.classList.remove('invalid');
        } else {
            event.target.classList.add('invalid');
            event.target.classList.remove('valid');
        }
    }
});
email.addEventListener('input', function(){

    if (regEmail.test(event.target.value)) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
});
password.addEventListener('input', function(){

    if (regPass.test(event.target.value)) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
});
emailLog.addEventListener('input', function() {

    if (regEmail.test(event.target.value)) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
});
passwordLog.addEventListener('input', function() {

    if (regPass.test(event.target.value)) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
});