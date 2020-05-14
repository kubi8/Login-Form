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


    // listening
formSignUp.addEventListener('submit', validateSignuUp);
formLogin.addEventListener('submit', validateLogin);

    // function
function validateSignuUp() {
    event.preventDefault();
}