const input = require('./input.js');

let rock = 'A', paper = 'B', scissors = 'C';
let points = 0;
input.map(elm => {
    let battle = elm.split(' ');
    const [opponent, me] = battle;
    switch (opponent) {
        case 'A':
            if(me == 'X')
                points+=0+(3);
            else if(me == 'Y')
                points+=3+(1);
            else 
                points+=6+(2);
            break;
        case 'B':
            if(me == 'X')
                points+=0+(1);
            else if(me == 'Y')
                points+=3+(2);
            else 
                points+=6+(3);
            break;
        case 'C':
            if(me == 'X')
                points+=0+(2);
            else if(me == 'Y')
                points+=3+(3);
            else 
                points+=6+(1);
            break;        
    }
    // switch (me) {
    //     case'X':
    //         points++;
    //         break;
    //     case 'Y':
    //         points+=2;
    //         break;
    //     case 'Z':
    //         points+=3;
    //         break;
    // };
})
console.log(points)
