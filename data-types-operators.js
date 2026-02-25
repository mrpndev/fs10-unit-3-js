// "use strict"
// mode in JS doesn't correct failures but throws errors

/* 
	? Data Types
	* JS has 10 data types
	* primitive
		* string
		* number
		* booolean
		* null
		* undefined
		* Not a Number (NaN)
	* reference
		* array (list)
		* object (dictionary)
		* map (dictionary)
		* set (tuple)
*/

/* 
	? String
	* just text
	* can be wrapped in "", '', or backticks ``
	* they are immutable (cannot be modified)
	* they are indexable
*/

let fullName = "Paul Niemczyk"
console.log(fullName)
let ageAsStr = "35"
console.log(ageAsStr)

// Adding strings together

// String concatenation
console.log("Hello, my name is " + fullName + " and I'm " + ageAsStr + " years old")

// String interpolation
// Builds a string and allows us to inject variables or expressions inside the string
let greeting = `Hello, my name is ${fullName} and I'm ${ageAsStr} years old.`
console.log(greeting)

// String interpolation allows you to add expressions within
console.log(`What's the sum of five and seven? ${5 + 7}`)

// Grab index of a string
console.log(fullName)
console.log(fullName[0]) // index and it starts at 0
console.log(fullName[2])
console.log(fullName[4]) // looks like nothing, but it's just a space

fullName[0] = "D"
console.log(fullName) // still Paul, not Daul because string is immutable

// Assigning a substring to a new variable
let firstLetter = fullName[0]
console.log(firstLetter)
console.log(fullName) // p is still there, not "stolen", because immutable

/*
	? String methods
	* .length (property)
	* .slice()
	* .toUpperCase()
	* .toLowerCase()
*/

console.log(fullName.length)
console.log(fullName.toUpperCase())
console.log(fullName.slice(0, 4))

// ? Can I check what data type something is?
// ! YES! Using typeof operator

console.log(typeof fullName) // return string

/* 
	? Numbers
	* any integer, float, decimal, bla bla numbers
*/

let age = 25
let bac = 0.08
console.log(age)
console.log(typeof age)
console.log(age + 10)
console.log(bac)

/* 
	? Boolean
	* binary value (on or off, yes or no)
	* 1/0
	* true false
	* JS has several values which are falsey
		* 0
		* false
		* undefined
		* null
		* "" (empty string)
*/

let isBusy = true
console.log(isBusy)

console.log(Boolean(0)) // Boolean() allows me to pass a value to check if it is

console.log(Boolean(1))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))

/* 
	? Null or Undefined
	* null - nothing
	* undefined - we haven't got a freakin' clue, can be anything
*/

