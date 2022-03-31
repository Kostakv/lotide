
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




// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const bae = { b: "2", a: "1", c: "3" };
const abc = { c: "3", b: "2", a: "1" };
console.log(eqObjects(bae,abc)) //=> true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const test1 = {a: 10, b: 20, c: [24, "17", "Hello"]}
const test2 = {c: [24, "17", "Hello"], b: 20, a: 10}
console.log(eqObjects(test1,test2))// => false





