
//Function, takes one argument 'String' using sentence
const letterPositions = function(sentence) {
  const results = {}; // empty object used to store results of sentence
  var positions = [] // array to store positions in results
  for (i in sentence){ // for loop for sentence 'i' selected letter
    if (sentence[i]!== ' '){
      positions = [] // resets the value after for loop J is complete
      for (j = 0; j < sentence.length; j++){ // for loop for sentence 'j' position tracker
        if (sentence[i] === sentence[j]){
          positions.push(j) // if letter i and letter j are == then push value 'j' to array
          
        }
      }

      results[sentence[i]]=positions // add propertie to object containing array elements

    }
  }
  
  return results;
};

console.log(letterPositions('lighthouse in the house'))
