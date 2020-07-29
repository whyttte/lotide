// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!

  let ans = eqObjects(actual, expected)
  if (ans === false) {
   actual != expected
  }
  else{
    actual = expected
  }
  assertEqual(actual, expected)
  
};



// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log("Assertion passed:", actual , "===", expected);
  }
  else {
    console.log("Assertion failed:" , actual, "!==", expected);
  }

};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objk1 = Object.keys(object1);
  let objk2 = Object.keys(object2);
  let objv1 = Object.values(object1);
  let objv2 = Object.values(object2);

  if (objk1.length !== objk2.length) {
    return false;
  }
  for (let key of objk1) { // for array use let of $ for objects use in.
    if(!objk2.includes(key)){
      return false;
    }
    else {
      if (object1[key] !== object2[key]){
        return false;
      }
  
    }
  }
  return true  
}





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false