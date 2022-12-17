const {rows, cols} = require('./input');
let checked = false
let visibleTrees = 0;
var c =0,j=0
let scenicScore = []
rows.map((elm, idx) => {
    elm.split("").map((el, indx) => {
        if(idx == 0 || idx == rows.length -1 || indx == 0 || indx == elm.length-1){
           visibleTrees++
           checked = true
        }
       
        let row = rows[idx].split(""), col = cols[indx], posX=idx, posY = indx;
        // if(scenicScore.length%99==0){
        //     scenicScore.push('\r\n')
        // }
        scenicScore.push(isVisible(el,posX, posY, row, col))
        checked = false
    })
   
})
function isVisible(value, posX, posY, row, col) {
    // console.log('value', value,'posX',posX,'posY',posY,'row', row,'col', col);
    let top = col.slice(0,posX).reverse();
    let right = row.slice(posY+1);
    let under = col.slice(posX+1);
    let left = row.slice(0,posY).reverse();
    let flag = false;
    let truthTable = {
        top:1,
        right:1,
        under:1,
        left:1
    }
    let checked = false;
    top.map((elm, idx) => {
        if(elm >= value && !checked){
            truthTable['top'] = idx+1
            checked=true;
        }
        if(!checked && idx == top.length-1){
            truthTable['top']=idx+1
        }
    }); 
    checked = false
    right.map((elm,idx) => {
        if(elm >= value && !checked){
            truthTable['right']= idx+1
            checked=true
        }
        if(!checked && idx == right.length-1){
            truthTable['right']=idx+1
        }
    });
    checked=false
    under.map((elm,idx) => {
        if(elm >= value && !checked){
            truthTable['under']= idx+1
            checked=true
        }
        if(!checked && idx == under.length-1){
            truthTable['under']=idx+1
        }
    });
    checked=false
    left.map((elm,idx) => {
        if(elm >= value && !checked){
            truthTable['left']= idx+1
            checked=true
        }
        if(!checked && idx == left.length-1){
            truthTable['left']=idx+1
        }
    });
    // Object.values(truthTable).map(el=>el).filter(el=>el==false).length==4?c++:null
    let scenicScore = 1;
    Object.values(truthTable).map(elm => {
            scenicScore*=elm;
    })    
     return scenicScore
}

let highestScenicScore = Math.max(...scenicScore)
// console.log(scenicScore.findIndex(elm => elm==201684));   
console.log(highestScenicScore);