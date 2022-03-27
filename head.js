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

// function that returns first element.
function head (array){
  return array[0]

};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));




