const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8')
    .toString()
    .replace(/\r/, "")
    .split('\n');

module.exports = input;