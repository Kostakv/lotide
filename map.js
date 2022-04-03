const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

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
