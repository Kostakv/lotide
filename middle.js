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
module.exports = middle;
