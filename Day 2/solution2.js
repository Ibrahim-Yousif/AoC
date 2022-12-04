const input = require('./input.js');

let rock = 'A', paper = 'B', scissors = 'C';
let points = 0;
input.map(elm => {
    let battle = elm.split(' ');
    const [opponent, me] = battle;
    switch (me) {
        case'X':
            points++;
            break;
        case 'Y':
            points+=2;
            break;
        case 'Z':
            points+=3;
            break;
    };
    switch (opponent) {
        case 'A':
            if(me == 'X')
                points+=3;
            else if(me == 'Y')
                points+=6;
            else 
                points+=0;
            break;
        case 'B':
            if(me == 'X')
                points+=0;
            else if(me == 'Y')
                points+=3;
            else 
                points+=6;
            break;
        case 'C':
            if(me == 'X')
                points+=6;
            else if(me == 'Y')
                points+=0;
            else 
                points+=3;
            break;        
    }
})
console.log(points)
