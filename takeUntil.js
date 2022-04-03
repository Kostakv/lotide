const takeUntil = function(array, callback) { // Higher order function
  var newArray = [] // new array to return
  for (const i of array) {
    if (!callback(i)){ // Sends value to callback and checks for true or false
      newArray.push(i) // add element to array if callback is false
    }
    else {
      return newArray // Returns a new array if callback is true
    }    
  }  
}

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);// Call back function returns true or false
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');// Call back function returns true or false
console.log(results2);









