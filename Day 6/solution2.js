const input = require('./input.js');

let temp = [];
input.map((elm, idx) => {
    if(temp.length == 14){
        isDifferent(temp, idx)
    }
    temp.push(elm);
})

function isDifferent(arr, idx){
    if((new Set(arr)).size !== arr.length){ // instead of brute forcing arr[0] == arr[1] || arr[0] == arr[2] || arr[0] == arr[3] || arr[1] == arr[2] || arr[1] == arr[3] || arr[2] == arr[3]
        arr.shift();
        return;
    }
    console.log(idx)
}