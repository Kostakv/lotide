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
  console.log("Array detected 1: ", firstArray)
  console.log("Array detected 2: ",secondArray)
  var pass = 0 // Variable to determine if it's true or false

  if (firstArray.length === secondArray.length){

  for (var i = 0; i < firstArray.length; i++){
    if (firstArray[i] !== secondArray[i]){
      return false
    }
  
  }
  return true
  }
  return false
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", "6"])) // => false