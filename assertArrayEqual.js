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
