//const marsRover = () => { throw "Not Implemented"; } 

// a JS object that tells how to reorient a rover based on an initial orientation (i.e. N is north) and a rotation movement (i.e. L is a 90' rotation left)
const howToReorient = {
  'N': {  // initial orientation "N" North
    'L': 'W', // turning "L" left reorients rover to "W" west
    'R': 'E'  // turning "R" right reorients the rover "E" east
  },
  'W': {
    'L': 'S', 'R': 'N'
  },
  'S': {
    'L': 'E', 'R': 'W'
  },
  'E': {
    'L': 'N', 'R': 'S'
  }
}

const howToDisplace = {
  'N': {
    'x': 0, 'y': 1
  },
  'W': {
    'x': -1, 'y': 0
  },
  'S': {
    'x': 0, 'y': -1
  },
  'E': {
    'x': 1, 'y': 0
  }
}

const howToReorient180degrees = {
  'N': 'S',
  'W': 'E',
  'S': 'N',
  'E': 'W'
}

/**
  Moves a rover landed on Mars
  It consumes the landing position and orientation (i.e. "1 2 N"), and the movements to make (i.e. "L")
  It returns the final position and orientation (i.e. "\n1 2 W")
*/
function execute(landingPosOrient, movements) {
  const arrlandingPosOrient = landingPosOrient.split(' ')
  let roverPositionX = Number(arrlandingPosOrient[0])  // rover position x coordinate
  const dimensionPlateauX = roverPositionX
  let roverPositionY = Number(arrlandingPosOrient[1])  // rover position y coordinate
  const dimensionPlateauY = roverPositionY
  let roverOrientation = (arrlandingPosOrient.length === 3) ? arrlandingPosOrient[2] : '' // rover orientation (N, E, S, W)

  // move rove if any movement is passed
  if (movements) {
    for (let i = 0; i < movements.length; i++) {
      //alert(str.charAt(i));
      if (movements[i] === 'L' || movements[i] === 'R') {  // movement is a rotation
        roverOrientation = howToReorient[roverOrientation][movements[i]]
        
      } else if (movements[i] === 'M') {  // movement is a displacement
        let roverNextPositionX = roverPositionX
        let roverNextPositionY = roverPositionY
        roverNextPositionX += howToDisplace[roverOrientation]['x']
        roverNextPositionY += howToDisplace[roverOrientation]['y']

        // check if next position would be out of the plateau
        if (roverNextPositionX > dimensionPlateauX || roverNextPositionY > dimensionPlateauY) {
          // turn the rover 180 degrees
          roverOrientation = howToReorient180degrees[roverOrientation]
          //return `
          //out of plateau`
        } else {  // displace the rover safely
          roverPositionX = roverNextPositionX
          roverPositionY = roverNextPositionY
        }
      }
    }
  }

  // return final position and orientation
  const finalPositionAndOrientation = `
${roverPositionX} ${roverPositionY} ${roverOrientation}`
  return finalPositionAndOrientation
}

module.exports = { execute }