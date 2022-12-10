const {stack, instructions} = require('./input.js');

let instructionSplit = instructions.map(elm => {
    return elm.split(/move |from |to /);
})
instructionSplit.map(elm => elm.shift())
let move = [], from = [] , to = [];

instructionSplit.map(elm => {
move.push(elm.shift());
from.push(elm.shift());
to.push(elm.shift())
})
move.map((elm, idx) => {
    for(let i = 0 ; i < parseInt(elm) ; i++){
        stack[parseInt(to[idx]-1)].unshift(stack[parseInt(from[idx]-1)].shift())
    }
})

let topCrates = stack.map(elm => elm.shift())
console.log(topCrates.join(""));
