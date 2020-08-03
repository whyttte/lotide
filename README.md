# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @whyttte/lotide`

**Require it:**

`const _ = require('@whyttte/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: verifies equality of 2 arrays
* `assertEqual(actual, expected)`: verifies equality of two things
* `countLetters(text)`: count number of letters in a text and returns them as an object
* `countOnly(allItems, itemsToCount)`: returns object of items that were counted
* `eqArrays`: checks whether 2 arrays are equal
* `eqObjects(obj1, obj2)`: checks if the two objects are equal
* `findKeyByValue(obj, value)`: finds the key of an object with the value
* `findKey(obj, function())`: finds the first key in an object
* `head(text)`: returns the first letter of the text
* `index`: require file for head, tail and middle
* `letterPositions(text)`: finds the positions of letters
* `map(word, function())`: maps the word the given function
* `middle(string)`: returns middle letter of a string
* `tail(element)`: returns array items except the first one
* `takeUntil(array, callback())`: returns an array that satisfies the callback function
* `titleCase(text)`: capitalises every word in a sentence/phrase 
* `test`: tests for some of the functions
* `assertObjectsEqual(actual, expected)`: asserts equal objects
