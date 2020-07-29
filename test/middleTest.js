const assert = require("chai").assert;
const middleTest = require(`../middle`)

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middleTest([1, 2, 3]), 2);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middleTest(['5']), []); 
  });
  
  it("returns [] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middleTest([1, 2, 3, 4]), []); 
  });
  it("returns undefined for []", () => {
    assert.deepEqual(middleTest([]), undefined); 
  });
});
