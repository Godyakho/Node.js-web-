module.exports.test = 'A'

const modB = require('./02_moduleB')
console.log('modA:',modB.test)

module.exports.test = 'AA'