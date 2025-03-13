function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

/* Fecha o menu ao clicar em um link */
function closeMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('active');
}
