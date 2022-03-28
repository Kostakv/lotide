const eqArrays = function (firstArray, secondArray){
  var pass = new Boolean(false)
  for (var i = 0; i < firstArray.length; i++){
    if (firstArray[i]===secondArray[i]){
      pass = true
    }
    else {
      pass = false
    }
  }
  return pass
  
}

const assertArrayEqual = function (firstArray, secondArray){
  var check = eqArrays(firstArray,secondArray)
  if (check == true){
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`)
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`)
  }
  

}

const without = function (source, itemsToRemove){
  var newArray = source
  for (var i = 0; i < source.length; i++){
    for (var j = 0; j < itemsToRemove.length; j++){
      if (source[i]===itemsToRemove[j]){
        newArray.splice(i,1)
      }
    }
  }
  return newArray
}

const words = ["hello", "world", "lighthouse"];
console.log(words)
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(words)
assertArrayEqual(words, ["hello", "world", "lighhouse"]);

