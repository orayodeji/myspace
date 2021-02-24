const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')

const summary = document.querySelector('.summary')
const photo = document.querySelector('.photo')



hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('open')
    links.forEach(link =>{
        link.classList.toggle('fade')
    })
})



