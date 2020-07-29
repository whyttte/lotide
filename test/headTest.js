
const assert = require("chai").assert;
const headTest = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(headTest([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(headTest(['5']), '5'); 
  });
});


// const head = (element) => {
//   if (element.length === 0) {
//     return undefined;
//   }
//   return element[0]
// }


console.log(headTest([5,6,7]));


console.log(headTest([]));