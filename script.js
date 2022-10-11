const hamburger = document.getElementbyID('hamburger');
const nav__links = document.getElementbyID('nav__links');

hamburger.addEventListener('click', () => {
    nav__links.classList.toggle('show');
});
