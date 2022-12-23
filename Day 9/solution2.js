const input = require('./input.js');
// let Head = {
//     posX:0,
//     posY:0
// },
// Tail = {
//     posX:0,
//     posY:0
// }
let array = []
// array.push(Head)
// array.push(Tail)
for(let i = 0 ; i < 10 ; i++){
    array.push({
        posX:0,
        posY:0,
    })
}
let visited = new Set();
let [Head] = array

input.map((elm,idx) => {
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
        
        array.map((elm, indx) => {
            if(indx < 9 ) {
                !isAdjacent(elm, array[indx+1], indx+1)&&moveTail(elm, array[indx+1], indx+1)
            }
             
        })

    }
}
)

function isAdjacent(head, tail, idx){
    let range = [head.posX-1,head.posX, head.posX+1]
    let domain = [head.posY-1,head.posY, head.posY+1]
    // visited.add(Object.values(tail))
    let value = Object.values(tail).map((elm,idx) => {
        return `${idx==0? `(${elm}`:`${elm})`}`
    }).join(",")
    idx == 9 && visited.add(value)
    
    return range.includes(tail.posX) && domain.includes(tail.posY)
}

function moveTail(head, tail, idx){
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
    idx == 9 && visited.add(value)
}

console.log(array);

console.log(visited.size);
