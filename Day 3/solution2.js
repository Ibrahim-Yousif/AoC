const {input2} = require('./input.js');
let priority = 0;
input2.map(elm => {
    let temp = elm.split('\n');
    // let shortestString = temp[0].length<temp[1].length ? temp[0].length<temp[2].length ? temp[0]:temp[2]:temp[1].length<temp[2].length? temp[1]:temp[2];
    let longestString = temp[0].length>temp[1].length ? temp[0].length>temp[2].length? temp[0]:temp[2] :temp[1].length>temp[2].length ? temp[1]:temp[2];
  // console.log(longestString, longestString.length)
    for(let i = 0 ; i < longestString.length ; i++){
        let char = new RegExp(`${longestString[i]}`);
        if(char.test(temp[0]) && char.test(temp[1]) && char.test(temp[2])){
        let weight = /[a-z]/.test(char.source) ? char.source.charCodeAt(0)-96: char.source.charCodeAt(0)-38;
        priority+=weight
    //    console.log(char.source, weight);
        break;
    }
    }
})
console.log(priority);