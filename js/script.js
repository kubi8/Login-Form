const check = document.querySelector('.signup__checkbox');
const cover =document.querySelector('.signup__submit--cover');

function stow(){
    cover.classList.toggle('active');
}

check.addEventListener('click', stow);