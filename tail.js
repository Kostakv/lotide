const assertEqual = require('./assertEqual');

function tail (array){
  var newArray = [];
  for (var i = 1; i < array.length; i++){
    newArray.push(array[i])
  }
  return newArray
};

module.exports = tail;