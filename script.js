const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

menu.onclick = function() {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

function closeMenu() {
    menu.classList.remove('active');
    navigation.classList.remove('active');
}