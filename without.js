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

//Function without that takes in 2 arrays
const without = function (source, itemsToRemove){
  var newArray = [] // New array to not modify the original

  //For loop to push elements into new array
  for (var i = 0; i < source.length; i++){
    newArray.push(source[i])
  }
  
  //Nested forloop to itterate each item of newArray with the itemsToRemove
  for (var i = 0; i < newArray.length; i++){ // i is the iteration of newArray
    for (var j = 0; j < itemsToRemove.length; j++){ //j is the iteration of itemsToRemove
      if (newArray[i] === itemsToRemove[j]){
        newArray.splice(i,1) // removes items that are === to items to remove
      }
    }
  }
  return newArray
  
}


module.exports = without;



