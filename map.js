const words = ["ground", "control", "to", "major", "tom"];




const results1 = map(words, word => word[0]);
console.log(results1);


const map = function(array, callBack) {
  console.log(callBack(array))

  // empty for now :)
}
let callBack = function(arrays) {
  for (array of arrays) {
    array.slice(1)
  }
}