const eqArrays = require('./eqArrays');
const assertEqual = require('./eqArrays');

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


module.exports = assertArrayEqual;
