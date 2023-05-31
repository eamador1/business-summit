document.addEventListener('DOMContentLoaded', () => {
const $hamburger = document.querySelector('.hamburger');
const $menu = document.querySelector('.nav-int');
const $list = document.querySelector('.ni-list')

$hamburger.addEventListener('click', () => {
    $hamburger.classList.toggle('active');
    $menu.classList.toggle('active');
    $list.classList.toggle('active');
});
});