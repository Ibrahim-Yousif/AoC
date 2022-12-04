const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	//.replace(/\r/g, "")
	.trim()
	.split('\r\n\r\n')

module.exports = {
	input,
};