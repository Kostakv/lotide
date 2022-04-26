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

const assertArrayEqual = function (arrayOne, arrayTwo){
  //If statement that gets the returned value from eqArrays
  if (eqArrays(arrayOne,arrayTwo)){
    return `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}` 
  }

  //Else statment if it's !==
  else {
    return `🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`
  }
  

}



//Function that flatten's any given array
const flatten = function (array){
  newArray = [] // Empty array to not modify original array

  for (var i = 0; i < array.length; i++){ //First loop with a length of entire array
    if (Array.isArray(array[i])){ // checks if array is present given current index value
      for (var j = 0; j < array[i].length; j++){ //Nested loop with a length of nested array 
        newArray.push(array[i][j]) // Pushes elements to newArray
      }
    }
    else {
      newArray.push(array[i]) // If no array found, add element to newArray
    }
  }
  return newArray
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3,17 ,45,67,78, 4], 5, [6,7,8]])) 

module.exports = flatten;