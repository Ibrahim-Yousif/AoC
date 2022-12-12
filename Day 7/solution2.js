const dirSpace = require('./solution1')
let diskSpace = 70000000
let totalNeededSpace = 30000000
let usedSpace = dirSpace['/'];
let availableSpace = diskSpace - usedSpace
let neededSpaceToFree = totalNeededSpace - availableSpace
let candidates = []
Object.values(dirSpace).map(elm => {
    if(elm >= neededSpaceToFree){
        candidates.push(elm)
    }
})
console.log(usedSpace,availableSpace,neededSpaceToree)
console.log(Math.min(...candidates));