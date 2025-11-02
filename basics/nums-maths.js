const num = 100; // this can be change in run time 

console.log(num);

const numObj = new Number(100) // when you want only number values

//built in functions
// The valueOf() method of Number values returns the value of this number.
const numVal = numObj.valueOf();
console.log(numVal);

// The toPrecision() method of Number values returns a string representing this number to the specified number of significant digits.

const precision = 123.45;
console.log(precision.toPrecision(4));
// Expected output: "123.5"


const hundred = 10000000;
console.log(hundred.toLocaleString()); //usa form
console.log(hundred.toLocaleString('en-IN')); //Indian form

/****************************Maths *************************/

console.log(Math)

console.log(Math.abs(-4)); //absolute number convert into positive number
console.log(Math.round(4.5)) //round of

// The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(4.5)) // round of always select the upper value if numbers are 

// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(4.5));


console.log(Math.random()); //numbers will be between 0 to 9
console.log((Math.random() * 10) + 1)
console.log(Math.floor((Math.random() * 10) + 1)) // numbers will be rounds down and returns the largest integer

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // min value will always be 10 and max will be 20 it will return random numbers between 10 to 20 
// can be used in dice games
// + 1 added because it should not be multiply by 0 because there is chances random number can be 0 as well