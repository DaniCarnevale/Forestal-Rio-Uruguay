const menu = document.querySelector('.menu-icono');
const enlaces = document.querySelector('.enlaces-menu');



menu.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});

enlaces.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
});

