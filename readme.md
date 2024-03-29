# Mars Rover Challenge

## Introduction

*This challenge was originally made as a preparation for a job interview. I did also other versions for training including one using object-oriented (Javascript) and test driven design (Jasmine) [here](https://replit.com/@pcolt/Rovers-on-Mars-with-classes-and-Jasmine-tests?v=1#index.js) on Replit*  

You can find many versions of this challenge online looking for "Mars Rover Challenge". This one is quite challenging because it expects more than one rover to be landed, and each one with a different initial position and a different series of instruction on how to move on the surface. It also has corner cases like a rover landed with no movement instructions.

## The original challenge statement

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading. 

Assume that the square directly North from (x, y) is (x, y+1).

### INPUT:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover’s position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.

Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished moving.

### OUTPUT:

The output for each rover should be its final co-ordinates and heading.

## Usage

Run the program with `npm start`  

Sequence of inputs can be modified in file [inputs.js](./inputs.js) following the format described in the [INPUT](#input) section