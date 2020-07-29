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
   
    // for(values in objv1) { 
    //   if (!keys in objk2 || !values in objv2) {
    //     return false
    //   }
    // }
  }
  return true  
}





const ab = { a: "1", b: "3" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false