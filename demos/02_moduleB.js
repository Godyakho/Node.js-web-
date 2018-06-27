module.exports.test = 'B'

const modA = require('./02_moduleA')
console.log('modB:',modA.test)

module.exports.test = 'BB'