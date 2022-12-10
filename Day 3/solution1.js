const {input1} = require('./input.js');
let priority = 0;
let double = false;
input1.map(elm => {
    let length = elm.length / 2;
    for(let i = 0 ; i <= length ; i++){
        for(let y = elm.length ; y >= length ; y--){
            if(elm[i] === elm[y] && !double){
                double = true;
                if(elm[i] === elm[i].toUpperCase())
                priority+=(elm[i].charCodeAt(0)-38)
                else priority+=(elm[i].charCodeAt(0)-96)
            }
        }
        
    }
     double = false
})

