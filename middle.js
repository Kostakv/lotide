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


const middle = function (array){ // function 1 argument for array
  newArray = [] // declaration of new array
  var middle = (array.length - 1)/2 // finds the middle index value
  if (array.length <= 2){ // just return empty array since no middle if length is <=2
    return newArray
  }
  
  else if (middle % 1 != 0.5){ // if no remainder just return newArray with middle
    newArray.push(array[middle])
    return newArray 
    
  }
  else { // with remainder subtract subtracks 0.5 then push to new array
    middle = middle - 0.5
    newArray.push(array[middle])
    middle++ // add 1 to middle to get next middle
    newArray.push(array[middle])
    return newArray
    
    
  }

}
console.log(middle([1])) // => [])
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3])
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

