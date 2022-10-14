const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav__links');

hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});