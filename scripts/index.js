const hamburger = document.getElementById('hamburguer');
const navUL = document.getElementById('header__nav--items');

hamburger.addEventListener('click',() => {
    navUL.classList.toggle('show');
});