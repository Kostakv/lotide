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

const eqArrays = function (firstArray, secondArray){
  var pass = new Boolean(false)
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