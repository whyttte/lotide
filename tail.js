const assertEqual = require('./assertEqual');


const tail = (element) => {
  // return element.slice(1);
  let newArray = [];
  if (element.length === 0) {
    return undefined;
  } else if (element.length === 1) {
    return [];
  } else {
    for (let i = 1; i < element.length; i++) {
      newArray.push(element[i]);
    }
  }
  return (newArray);

};


module.exports = tail;