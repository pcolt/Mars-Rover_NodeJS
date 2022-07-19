//const mars = require("./mars.js")
const nasaMission = require("./nasa.js")

const input = `
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`

//mars.marsRover(input)

const output = nasaMission.sendRovers(input)
console.log("\noutput: ", output)