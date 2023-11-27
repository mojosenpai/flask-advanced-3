// console.log('hello from another file!')
// console.log(window)
// let p = document.getElementById('first-paragraph')
// console.log(p)
// p.textContent = 'goodbye everyone!'
// let text = document.getElementsByClassName('text')
// console.log(text)
// let header = document.getElementsByTagName('h1')
// console.log(header)
// let tags = document.querySelectorAll('input, #first-paragraph')
// console.log(tags)
let body = document.getElementsByTagName('body')[0]
console.log(body)
let button = document.getElementById('color-changer')
button.addEventListener('click', (e) => {
    body.style = 'background-color: green'
})