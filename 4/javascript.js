let menu = document.querySelector('.menu')
let close = document.querySelector('.close')
const nav = document.querySelector('nav')

// console.log(menu)
// console.log(close)
// console.log(nav)

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})