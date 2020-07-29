const assertEqual = require('./eqArrays')

// const eqArrays = function (array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
      
//     }
//   return true;
//   }
// }

const assertArraysEqual =  function(array1, array2) {
  
  let ans = assertEqual(array1, array2)
  if (ans === false) {
    return false;
  }
  else {
    return true;
  }
}
    
module.exports = assertArraysEqual

