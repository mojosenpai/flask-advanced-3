let background = document.querySelector('.bg')
let text = document.querySelector('.loading-text')

let load = 0

function blur() {
    load += 1
    if(load > 100) {
        clearInterval()
    }
    else {
        text.innerText = `${load}%`
        text.style.opacity = 1 - (load / 100)
        background.style.filter = `blur(${30 - (load * 30.0) / 100.0}px)`
    }
}

let inter = setInterval(blur, 30)