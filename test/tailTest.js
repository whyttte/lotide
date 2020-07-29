const assert = require("chai").assert;
const tailTest = require(`../tail`);

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tailTest([1, 2, 3]),[2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tailTest(['5']), []); 
  });
});




console.log(tailTest([2, 3, 4, 5]));