


const findKey = function(object, func){
  for (let key in object) {
    console.log(object[key])
    if (object[key] === func(key)) {
      console.log(object[key]);
    }
  }

}




findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"