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
  var pass = 0 // Variable to determine if it's true or false
  for (var i = 0; i < firstArray.length; i++){
    if (firstArray[i] !== secondArray[i]){
      pass = 1
    }
  
  }

  // If/else statment for result
  if (pass === 1){
    return false
  }
  else {
    return true
  }
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => false