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

*/