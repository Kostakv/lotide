# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kostakv/lotide`

**Require it:**

`const _ = require('@kostakv/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]

## Documentation

The following functions are currently implemented:


### FUNCTIONS

* assertArrayEqual - Displays a text to show if arrays passed are equal or not
* assertEqual - Takes two arguments and displays if they are equal or not
* eqArrays - Takes two arrays and checks if they are equal or not
* flatten - Takes an array that has arrays inside of that array and flattens 
* head - returns the first element of an array
* tail - returns the tail of an array (Excluding the head of the array)
* middle - returns the middle element of an array
* without - takes two arugments, removes certain elements of an array *but keeps original the same*
* countOnly - takes two arguments (array and object) counts only specific keys in an object, returns new object
* countLetters - takes one arugment 'String' and returns an object containing the number of identical letters
* letterPositions - takes one argument 'String' and returns object showing the positions of each letter in string passed
* findKeyByValue - takes two arguments, object and value, returns the key of an object that matches the value passed
* eqObjects.js - takes two arguments, object and object, returns if they are equal or not **INDEVELOPMENT**
* assertObjectsEqual - takes two objects and prints an assertion message 
* map.js takes two arguments an array and a callback function, to return a new array of that has been mapped
* takeUntil.js takes two arguments, an array and a callback function to return a new array of elements containing only elements up to a certain point
* findKey.js takes two arguments, an object and a callback function returns key using callback function

### Test Folder lotide/test

* assertArrayEqualTest.js
* assertEqualTest.js
* eqArrays.js
* headTest.js
* middleTest.js
* tailTest.js
