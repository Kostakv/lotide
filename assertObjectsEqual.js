const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1) // key1 variable = to array keys of object1
   
  if (Object.keys(object1).length !== Object.keys(object2).length){ // checks the length of both objects, if true, return false **!==***
    return false   
  }

  for (const i of key1) { // for of loop, iteration of key1 iterator ('i')
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])){ //Checks if array is present in certain key index   
      if (!eqArrays(object1[i],object2[i])){ // checks if the arrays passed to eqArrays are equal
        return false
      }     
    }   
    else if (object1[i] !== object2[i]){ // condition, if true return false **!==**
      return false
    }    
  }  
  return true // if code gets to this line, then return true  
};


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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual,expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }


  
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


assertObjectsEqual(cd,dc)

