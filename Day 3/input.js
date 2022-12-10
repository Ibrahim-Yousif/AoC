const fs = require('fs');

const input1 = fs.readFileSync('./input.txt', 'utf8')
.toString().trim().split('\r\n');

let input2 = [];
for(let i = 0 ; i < 300 ; i+=3){
    let temp = input1.slice(i, i+3)
    input2.push(temp.join('\n'));
}
module.exports = {
    input1,
    input2
};