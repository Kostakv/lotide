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

//Function that takes in two arrays and checks if it's equal to eachother
const eqArrays = function (firstArray, secondArray){
  var pass = new Boolean(false) // variable changes from false to true depending on outcome
  for (var i = 0; i < firstArray.length; i++){
    if (firstArray[i]===secondArray[i]){
      pass = true
    }
    else {
      pass = false
    }
  }
  return pass
  
}

console.log(assertEqual(eqArrays([1, 2, 6], [1, 2, 3]), true)); // => should PASS

