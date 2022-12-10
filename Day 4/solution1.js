let input = require('./input');
let inclusiveAssignments = 0;
let added = false;
input.map((elm, idx) => {
    let temp = elm.toString().split(',');
    let X1 = parseInt(temp[0].split('-')[0]);
    let X2 = parseInt(temp[1].split('-')[0]); 
    let Y1 = parseInt(temp[0].split('-')[1]);
    let Y2 = parseInt(temp[1].split('-')[1]); 
    if(X1<=X2 && Y1>=Y2){
        inclusiveAssignments++;
        // console.log(X1,Y1,X2,Y2,'first log');
        added = true;
    }   
    if(X2<=X1 && Y2>=Y1 && !added){   
        inclusiveAssignments++;
        // console.log(X1,Y1,X2,Y2,'second log');
    }  added = false;
//   console.log(X1,Y1,X2,Y2);
})
console.log(inclusiveAssignments);