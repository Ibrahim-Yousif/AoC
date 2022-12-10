let {stack, instructions} = require('./input.js');

let instructionSplit = instructions.map(elm => {
    return elm.split(/move |from |to /);
})
instructionSplit.map(elm => elm.shift())
let move = [], from = [] , to = [];

instructionSplit.map(elm => {
move.push(elm.shift());
from.push(parseInt(elm.shift())-1);
to.push(parseInt(elm.shift())-1)
})
stack.map(elm => elm.reverse())

move.map((elm, idx) => {
    let temp = stack[parseInt(from[idx])].splice(stack[parseInt(from[idx])].length-parseInt(elm))
    stack[parseInt(to[idx])].push(...temp)
})

console.log(stack);
let topCrates = stack.map(elm => elm.pop())
console.log(topCrates.join(""));
