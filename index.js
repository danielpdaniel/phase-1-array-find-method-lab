// code your solution here

function superbowlWin(array) {
const soupBowl = array.find(obj => (obj.result === "W"));
if (soupBowl === undefined){
return undefined;
} else {
    return soupBowl.year;
}
//is this answer fine? need to come back and check cuz it feels like cheating somehow...
//the soupBowl find function is giving me the object wihtin the record array that has a result of "W"
//BUT this is the only way i've found i was able to access the year key within that object without messing up
//the undefined result we're supposed to get otherwise?? i think because it was doing undefined.year which doesnt
//spit out undefined but an error i guess? so yeah i guess im still wondering if theres a way to access the year key when
//there IS a result = "W" while still letting the undefined through when there isnt a "W"... hmmm....
}

// function superbowlResult(obj) {
//     return obj.result;
//   }
  
//   function superIf(obj) {
//     if (superbowlResult(obj) === "W") {
//       return obj.year
//     }
//   }
  
// function superbowlWin(array) {
//     let findObject = array.find(superIf)
//     return findObject
// }

//   function superbowlWin(array) {
//       return (array.find(superbowlResult)).year
    
//   }
  