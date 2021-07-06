/*===== MENU SHOW =====*/

const nav_toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.menu');
const navlink = document.querySelectorAll('.nav_link');

nav_toggle.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

navlink.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('show-menu');
  });
});
/*===== REMOVE MENU MOBILE =====*/
