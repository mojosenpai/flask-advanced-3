// let is_even = (n) => n % 2 == 0
// console.log(is_even(4))
// console.log(is_even(5))

let s = 'this is a string'
console.log(s.length)
console.log(s[3])
let s2 = 'and this is another string'
console.log(s +' ' + s2)

let firstname = 'Arash'
let age = 5
console.log('Hi my name is ' + firstname + ' and I\'m ' + age + ' years old.')
console.log(`Hi my name is ${firstname} and I'm ${age} years old.`)

let a = [2, 3, 5, 7]
console.log(a)
console.log(a[1])
console.log(a.length)
a.push(11)
console.log(a)
a[100] = 13
console.log(a)
console.log(a[5])
a.unshift(1)
console.log(a)
a.splice(3, 0, 4)
console.log(a)

let b = [1, 2, 3, 5, 8]
for(let i = 0; i < b.length; i++) {
    console.log(b[i] * 2)
}

b.forEach((x) => console.log(x * 2))

let c1 = []
for(let i = 0; i < b.length; i++) {
    c1.push(b[i] * 2)
}
console.log(c1)

let c2 = []
b.forEach((x) => c2.push(x * 2))
console.log(c2)

let c3 = b.map((x) => x * 2)
console.log(c3)

// s = 'HeLLo WorLD!' => 'HELLO WORLD!'
// s = 'Hello EveryOne!' => 'hello everyone!'

let d = [2, 3, 5, 8, 13, 21, 34]

let e1 = []
for(let i = 0; i < d.length; i++) {
    if(d[i] % 2 == 0) {
        e1.push(d[i])
    }
}
console.log(e1)

let e2 = []
d.forEach((x) => {
    if(x % 2 == 0) {
        e2.push(x)
    }
})
console.log(e2)

let e3 = d.filter((x) => x % 2 == 0)
console.log(e3)

let person = {
    firstname: 'Behzad',
    age: 30,
    married: true
}

console.log(person)
console.log(person['age'])
console.log(person.firstname)

function Cat(age, firstname) {
    this.age = age
    this.firstname = firstname
}

Cat.prototype.intro = function() {
    console.log(`Hi, my name is ${this.firstname} and I\'m ${this.age} years old.`)
}

let tim = new Cat(2, 'Timmy')
console.log(tim)
tim.intro()


class Dog {
    constructor(firstname, age) {
        this.firstname = firstname
        this.age = age
    }

    intro = () => {
        console.log(`Hi, my name is ${this.firstname} and I\'m ${this.age} years old.`)
    }
}

let max = new Dog('Max', 3)
max.intro()

try {
    let lastname = ''
    if(lastname.length == 0) {
        throw 'lastname empty'
    }
    console.log(lastname)
    console.log('successful')
}
catch(e) {
    console.log(e)
}
finally {
    console.log('execution finished')
}