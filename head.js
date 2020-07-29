const assertEqual = require('./assertEqual')


const head = (element) => {
  if (element.length === 0) {
    return undefined;
  }
  return element[0];
}

module.exports = head;

