// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  //First condition if the two inputs are equal
  if (actual === expected){
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}` 
  }

  //Else statment if it's !==
  else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  }
};


const countLetters = function (string){
  letters = {} // new empty object to store number of letters in string passed
  var count = 0; // counter to count the number of letters of each character in string
  for (i in string){ // Loops through the string passed to the function ('i' is the selected letter)
    count = 0; // reset the count everytime it goes to a new letter

    if (string[i]!==' '){ // If there's a space at the index, skip over it

    for (var j = 0; j < string.length; j++){ //nested forloop to check secondary letters ('j' is the index value that compares it to 'i')
      if (string[i]===string[j]){ // if selected index is equal to another index add 1 to count
        count++
      }
    }
    letters[string[i]]=count // after iteration, add the letter with count as the value
  }
  }
  
  return letters
}

console.log(countLetters('lighthouse in the house'))

module.exports = countLetters;