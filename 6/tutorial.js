const z = 12
let x = 5
x = "goodbye world!"
console.log("hello world!")
console.log(x)
console.log(z)

let a = 11
let b = 11.5
let c = "this is a string"
let d = true
console.log(a, b, c, d)

let age = 21
if (age >= 18) {
    console.log('yes')
}
else if (age >= 15) {
    console.log('only with a guardian')
}
else {
    console.log('no')
}

let invited = true
let famous = false

if (invited && !famous) {
    console.log('accepted')
}
else {
    console.log('rejected')
}

let code = 4

switch (code) {
    case 1:
        console.log('transfer')
        break
    case 2:
        console.log('deposit')
        break
    case 3:
        console.log('ten recent transfers')
        break
    case 4:
        console.log('more options')
        break
    default:
        console.log('command not found')
}

let var1 = 123
let var2 = '123'

if (var1 === var2) {
    console.log('same')
}
else {
    console.log('different')
}

let counter = 1
while (counter <= 100) {
    console.log(counter)
    counter++
}

let flag = false
while (flag) {
    console.log('in the loop')
}

do {
    console.log('in the loop')
} while (flag)

for (let i = 2; i <= 100; i *= 2) {
    console.log(i)
}

let count = 1
while (true) {
    if (count > 100) {
        break
    }
    console.log(count)
    count++
}

for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        continue
    }
    console.log(i)
}

// this is a comment

/*
this
is
a
comment
*/

// FizzBuzz
// mult. 3 => Fizz
// mult. 5 => Buzz
// mult. 3 & 5 => FizzBuzz
//else => number

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}

function is_odd(a=3) {
    if (a % 2 == 0) {
        return false
    }
    else {
        return true
    }
}

console.log(is_odd(6))
console.log(is_odd())

// function add(a=4, b=5) {
//     return a + b
// }

let add = (a=4, b=5) => a + b

console.log(add(1, 2))
console.log(add(1))
console.log(add())

function apply_twice(x, f) {
    return f(f(x))
}

// function add_five(x) {
//     return x + 5
// }

console.log(apply_twice(3, x => x + 5))