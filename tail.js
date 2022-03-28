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

function tail (array){
  var newArray = [];
  for (var i = 1; i < array.length; i++){
    newArray.push(array[i])
  }
  return newArray
};
