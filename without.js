const assertArrayEqual =  function(array1, array2) {
  let ans = eqArray(array1, array2)
  if (!ans) {
    console.log("arrays are not equal")
  }
  else {
    console.log("passed, arrays are equal")
  }
}

const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log("Assertion passed:", actual , "===", expected);
  }
  else {
    console.log("Assertion failed:" , actual, "!==", expected);
  }

};
const eqArrays = function (array1, array2) {
  let i = 0;
  let j = 0;
  if (array1.length !== array2.length) {
    console.log("false")
  }
  else if (array1.length === array2.length) {
    if (i < array1.length && j < array2.length) {
      if (array1[i] !== array2[j]) {
        console.log("false")
      }
      i++; j++;
    }

    else {
      console.log("true") // why is not doing anything?
    }
  }
}
    
const without = function(source, itemsToRemove) {

}
eqArrays([1, 2, 3], [1, 2, 5])
a // deletegit remote add lotitde/ <https://github.com/whyttte/lotide.gi