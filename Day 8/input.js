const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8')
const rows = input.split('\r\n')
const cols = rows.map((elm, idx) => {
   return elm.split("").map((el, indx) => {
        return rows[indx][idx]
    })
});

module.exports = {
    rows,
    cols
}
