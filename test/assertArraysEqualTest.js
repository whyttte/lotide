const assertArraysEqualTest = require(`../assertArraysEqual`)



console.log(assertArraysEqualTest(([1, 2, 3], [1, 2, 3]) , false));
console.log(assertArraysEqualTest(([1, 2, 3], []) , false));