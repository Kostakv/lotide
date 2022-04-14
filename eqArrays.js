
//Function that takes in two arrays and checks if it's equal to eachother
const eqArrays = function (firstArray, secondArray){
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

module.exports = eqArrays;