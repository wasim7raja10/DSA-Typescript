let age = 6; // number
const number = 5; // 5 is a constant
// this is called type inference when you don't specify the type of a variable and the compiler infers it for you
// type 5 is called a literal type because it is a literal value
console.log(age);

let name; // any type

name = "John"; // any type

console.log(name); // still any type

// between 500 and 1000
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime: Date; // type annotation

setTimeout(() => {
	endTime = new Date();
	console.log(`End time: ${endTime}`);
}, RANDOM_WAIT_TIME);

console.log(`Start time: ${startTime}`);
