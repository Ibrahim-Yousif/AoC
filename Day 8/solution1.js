const {rows, cols} = require('./input');
let checked = false
let visibleTrees = 0;
var c =0,j=0


rows.map((elm, idx) => {
    elm.split("").map((el, indx) => {
        if(idx == 0 || idx == rows.length -1 || indx == 0 || indx == elm.length-1){
           visibleTrees++
           checked = true
        }
       
        let row = rows[idx].split(""), col = cols[indx], posX=idx, posY = indx;
        !checked && isVisible(el,posX, posY, row, col) && ++visibleTrees
        checked = false
    })
   
})
function isVisible(value, posX, posY, row, col) {
    // console.log('value', value,'posX',posX,'posY',posY,'row', row,'col', col);
    let top = col.slice(0,posX);
    let right = row.slice(posY+1);
    let under = col.slice(posX+1);
    let left = row.slice(0,posY);
    let flag = false;
    let truthTable = {
        top:true,
        right:true,
        under:true,
        left:true
    }
    top.map(elm => {
        if(elm >= value){
            truthTable['top']= false
        }
    });
    right.map(elm => {
        if(elm >= value){
            truthTable['right']= false
        }
    });
    under.map(elm => {
        if(elm >= value){
            truthTable['under']= false
        }
    });
    left.map(elm => {
        if(elm >= value){
            truthTable['left']= false
        }
    });
    // Object.values(truthTable).map(el=>el).filter(el=>el==false).length==4?c++:null
    Object.values(truthTable).map(elm => {
        if(elm == true)
            flag = true
    })    
     return flag
}
console.log(visibleTrees);