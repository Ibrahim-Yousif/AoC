const input = require('./input')

let dirLine = [],route = []
let candidates = {};

let sum = 0;
input.map(elm => {

    if(elm.match(/^\$ cd/)){
        if(elm.match(/[..]/)){
            dirLine.pop()
            route.pop()
        }else {
            dirLine.push(elm.split(" ")[2])
            route.push(dirLine.join('/'))
            candidates[route[route.length-1]] = 0;
        }
    }

    if(elm.match(/\d/)){
        route.map((value,idx) => {
          candidates[value] += parseInt(elm.split(" ")[0])
        })
    }
   
})
// console.log(dirLine);
console.log(candidates);

Object.values(candidates).map(elm => {
    if(elm <= 100000){
        sum+=elm
    }
})
console.log(sum);
module.exports = candidates
