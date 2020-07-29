const titleCase  = function(text) {
  let newString = text.toLowerCase().split(" ")
  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1)
  }
  newString.join(" ")

  return newString.join(" ");
  
  // Your code in here ...
};



const text = "I do not know!"

console.log(titleCase(text));