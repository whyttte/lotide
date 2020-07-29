// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log("Assertion passed:", actual , "===", expected);
  }
  else {
    console.log("Assertion failed:" , actual, "!==", expected);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const countOnly = function (allItems, itemsToCount) {
  let obj = {};
  for (let i = 0; i < allItems.length; i++) {  // for every item in allItems
    for (let name in itemsToCount) { //if you find the item as a key in the object and the key is true
      if (name === allItems[i] && itemsToCount[name] === true) {
        if (obj[name] ) {
          obj[name] += 1;
        }
        else {
          obj[name] = 1;
        }
        // num += 1
        // obj["result"] = num;   // return the no of times the object appeared
        // console.log(obj['result']) // return that object item
      }
    }  
  }
  return obj
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
