// JavaScript para el menú hamburguesa (navegación responsive en dispositivos móviles)
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('#navbarNav');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
