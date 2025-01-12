// hamBtn Menu
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menuBtn')
const menuLink = document.querySelectorAll('nav a')
console.info(menuLink)
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show')
})

// Scroll Navbar
const navbar = document.getElementsByTagName('nav')[0]
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('show')
    } else {
        navbar.classList.remove('show')
    }
})