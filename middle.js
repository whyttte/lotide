const middle = (element) => {
  // return element.slice(1);
  let newArray = [];
  if (element.length === 0) {
    return undefined;
  } else if (element.length === 1 || element.length % 2 === 0) {
    return [];
  } else {
    let half = (element.length - 1 )/ 2;
    return (element[half]);
    }
  };

  module.exports = middle
  