const fs = require('fs')

let [stack, instructions] = fs.readFileSync('input.txt', 'utf8')
        .toString().split('\r\n\r\n');


stack = [
    ['W','B','G','Z','R','D','C','V'],
    ['V','T','S','B','C','F','W','G'],
    ['W','N','S','B','C'],
    ['P','C','V','J','N','M','G','Q'],
    ['B','H','D','F','L','S','T'],
    ['N','M','W','T','V','J'],
    ['G','T','S','C','L','F','P'],
    ['Z','D','B'],
    ['W','Z','N','M']
]
instructions = instructions.split('\r\n');

module.exports = {
    stack,
    instructions
}