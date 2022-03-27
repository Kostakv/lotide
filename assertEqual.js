// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    return '✅✅✅ Assertion Passed: '+actual +' === '+expected
  }
  else {
    return '🛑🛑🛑 Assertion Failed: '+actual +' !== '+expected
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Hello","Hello"))
console.log(assertEqual(1, 1));
console.log(assertEqual(5, 1));

