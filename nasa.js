//const marsRover = () => { throw "Not Implemented"; } 
const rover = require('./rover.js')

/**
  Sends one or more rovers on mars and optionally move them on the surface
  It consumes the initial full command for every rover with initial position, orientation and optionally a series of movements
  It returns the final position and orientation of all the rovers sent
*/
function sendRovers(fullInitialCommand) {
  const arrFullInitialCommand = fullInitialCommand.split('\n')
  console.log(arrFullInitialCommand)

  let returnsFromRovers = ''  // initialize the final positions and oreintations of all ther sanded rovers
  let landingPosition = ''    // initialize rover's landing position variable
  let movements = false       // initilaize rover's movements

  // loop over all the lines representing positions and commands for all the rovers
  for (let n = 0; n < arrFullInitialCommand.length; n++) { 
    console.log('\nn: ', n)
    console.log('arr length: ', arrFullInitialCommand.length)
    
    // if empty string skip to next line
    if (!arrFullInitialCommand[n]) {
      console.log('continue')
      continue
    }

    // if it is the last line or the next line is a position command, rover is sent with no movements to do
    if (n+1 > arrFullInitialCommand.length-1 || !isNaN(arrFullInitialCommand[n+1][0])) {
      landingPosition = arrFullInitialCommand[n]
      movements = false

      // otherwise send a rover with initial position-orientation and movements
    } else {
      landingPosition = arrFullInitialCommand[n]
      movements = arrFullInitialCommand[n+1]
      n++  // move next iteration to next rover's position skipping movements of last rover
    }
    console.log('landingPosition: ', landingPosition)
    console.log('movements: ', movements)

    // send the rover and store the final position after all the movements
    const returnFromRover = rover.execute(landingPosition, movements)
    returnsFromRovers += returnFromRover
  }

  // when all the rovers have finished return all final positions and orientations
  return returnsFromRovers
}

//console.log(sendRovers("\n5 5"))
// console.log(sendRovers(`
// 5 5
// 1 2 N
// LMLMLMLMM
// 3 3 E
// MMRMMRMRRM
// `))

module.exports = { sendRovers }