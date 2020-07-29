const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log("Assertion passed:", actual , "===", expected);
  }
  else {
    console.log("Assertion failed:" , actual, "!==", expected);
  }

};


const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
      
    }
  return true;
  }
}

const assertArraysEqual =  function(array1, array2) {
  
  let ans = eqArrays(array1, array2)
  if (ans === false) {
    return false;
  }
  else {
    return true;
  }
}


const letterPositions = function(sentence) {
  const results = {}; // the object to be populated and returned
  let corrected = sentence.split(""); // separating and making into array
  corrected.forEach(function(letter){ // for each of the letters in the array, make a key of it
    results[letter] = [];
  });
  for(let i = 0; i < sentence.length; i++) {
    results[sentence[i]].push(i);
  }
  delete results[" "];
  return results;
}
  

console.log(letterPositions("Lighthouse labs"));
