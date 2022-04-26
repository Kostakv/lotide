// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  //First condition if the two inputs are equal
  if (actual === expected){
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}` 
  }

  //Else statment if it's !==
  else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  }
};

const findKey = function (object, callback){ // Higher order function
  for (const i of Object.keys(object)) { // Loops through object
    if (callback(object[i])){ // Every iteration callback function with object key value passed
      return i // if true, return at index.
    }
  }
}
result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // call back function


console.log(assertEqual(result,'noma'))

module.exports = findKey;

