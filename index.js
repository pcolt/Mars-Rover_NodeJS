//const mars = require("./mars.js")
const nasaMission = require('./nasa.js')
const input = require('./inputs.js')

console.log('input: ', input)
//mars.marsRover(input)

const output = nasaMission.sendRovers(input)
console.log('\noutput: ', output)