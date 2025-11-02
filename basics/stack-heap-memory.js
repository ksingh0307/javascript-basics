// primitive data types - number, string, undefined, null, ...

// stores into stack 

// example
let a = 10; // Stored in stack
let b = a;  // Also stored in stack as a copy of 'a'

a = 20;     // Changing 'a' does not affect 'b'

console.log(a); // Outputs: 20
console.log(b); // Outputs: 10

// non primitive - object, arrays, function

let obj1 = { name: "Alice" }; // Stored in heap
let obj2 = obj1;               // Both 'obj1' and 'obj2' point to the same location in heap

obj1.name = "Bob";             // Modifying obj1 will affect obj2

console.log(obj1.name); // Outputs: "Bob"
console.log(obj2.name); // Outputs: "Bob"