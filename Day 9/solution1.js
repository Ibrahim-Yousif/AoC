const input = require('./input.js');
let Head = {
    posX:0,
    posY:0
},
Tail = {
    posX:0,
    posY:0
}
let visited = new Set();

input.map(elm => {
    const [direction, moves] = elm.split(' ');
    for(let i = 0 ; i < parseInt(moves) ; i++){
        switch (direction) {
            case 'R':
                Head.posX +=1
                break;
            case 'D':
                Head.posY -=1
                break;
            case 'L':
                Head.posX -=1
                break;
            case 'U':
                Head.posY +=1
                break;
        }
        if(isAdjacent(Head, Tail)) continue
        else moveTail(Head, Tail);
    }
})

function isAdjacent(head, tail){
    let range = [head.posX-1,head.posX, head.posX+1]
    let domain = [head.posY-1,head.posY, head.posY+1]
    // visited.add(Object.values(tail))
    let value = Object.values(tail).map((elm,idx) => {
        return `${idx==0? `(${elm}`:`${elm})`}`
    }).join(",")
    visited.add(value)


    return range.includes(tail.posX) && domain.includes(tail.posY)
}

function moveTail(head, tail){
    let sameRow = head.posY == tail.posY
    let sameCol = head.posX == tail.posX
    if(sameRow){
        head.posX > tail.posX ? tail.posX +=1 : tail.posX -=1
    }else if(sameCol){
        head.posY > tail.posY ? tail.posY+=1 : tail.posY-=1
    }else {
        head.posX > tail.posX ? tail.posX+=1 : tail.posX-=1
        head.posY > tail.posY ? tail.posY+=1 : tail.posY-=1
    }
    let value = Object.values(tail).map((elm,idx) => {
        return `${idx==0? `(${elm}`:`${elm})`}`
    }).join(",")
    visited.add(value)
}

console.log(visited.size);