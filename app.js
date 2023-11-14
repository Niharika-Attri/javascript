//commonJS, every file is module(by default)

const names = require('./names')
const sayHi = require('./utils')
console.log(names)
console.log(sayHi)
    
const data = require('./altflavor')
console.log(data)

sayHi('susan')
sayHi(names.john)

// sayHi('susan')
// sayHi(john)