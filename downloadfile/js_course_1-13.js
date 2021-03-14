// 1.USE CONSOLE

// log to console for showing output of JavaScript and debugging
console.log('hello world');
console.log(123);
console.log(true);
// create a varibile and call it
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
// create a table
console.table({a:1, b:2});
console.error('This is some error');
console.clear();
console.warn('This is a warning');
// get the time of script-running
console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');

// 2. VARIABLE BASIC
// Declare name rules: only use letters or underscore _ or dollors $.
// Usually, we use camel case just like 'fristName'.
// Types: var, let, const.
// In format, var and let is similar, while const is unique. The following is wrong:
// ---------------------------------------
const name;
name = 'John';

const name = 'John';
name = 'Sara';
// ---------------------------------------
// const declare constant values that can't be changed and must be assigned value when being declared.
// however, property of object and array may cause confuse, the following is ok:
// ---------------------------------------
const person = {
　name : 'John',
　age : 30
}
person.name ='Sara';
person.age = 32;
console.log(person);
// output: { name: 'Sara', age: 32 }

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
// output:
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5, 6 ]
// ---------------------------------------
// 3. DATA TYPES

// Peimitive data types and Reference types
// *Permitive data types: string, number, boolean, null, undefined,
// symbols.
// *Reference data types: arrays, object literals, functions, dates and anything
// else
// *JavaScript is dynamicallly typed language.
// PEIMITIVE
// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - return objects.
// Array
const hobbies = ['Movies', 'Music'];
// Object literal
const address = {
　city :'Boston',
　state : 'MA'
}
// Date
const today = new Date();

console.log(typeof address);


// 4. TYPE CONVERSION
// To String
val = string(number, boolean, true, new Date(), array);
val = (number, boolean, true, new Date(), array).toString();
// To Number: arrry and string with charaters donot work well with this method
val = Number(string, boolean, null)
// 5. Numbers and Math Object

// Simple math operater: +, *, -, /, %
// Math object:
　Math.PI
　Math.E
　Math.round()
　Math.ceil()
　Math.floor()
　Math.sqrt()
　Math.abs()
　Math.pow()
　Math.min()
　Math.max()
　Math.random()

// 6. STRING METHODS AND CONCATENATION

const firstName = 'William';
const lastName = 'Johnson';
const str = 'Hello there my name is Brad';
const tags = 'web design, web development, programming';

let val;

// Concatenation
val = firstName + ' ' + lastName;
// Append
val = 'Hello, my name is ' + firstName + lastName;
// Escaping
val = 'That\'s awesome, I can\'t wait';
// Length
val = firstName.length;
// concat()
val = firstName.concat(' ', lastName);
// Change case
val = firstName.toUpperCase();
val = firstName[2];
// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
// charAt()
val = firstName.charAt('2');
val = firstName.charAt(firstName.lengths-1);
// substring
val = firstName.substring(0, 4);
// slice()
val = firstName.slice(2);
// split()
val = str.split(' ');
val = tags.split(',');
// replace()
val = str.replace('Brad', 'Jack');
// includes()
val = str. includes('hello');
console.log(val);

// 7. TEMPLATE STRINGS

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

let html;

// Without template strings(es5)
html = 'Name: ' + name + 'Age: ' + age + ' ' + job + 'City: ' + city;

// With template strings(es6)-better!
function hello(){
    return 'hello';
    }
html = `
    Name: ${name}
    Age: ${age}
    Job: ${job}
    City: ${city}
    ${2 + 2}
    ${hello()}
    ${age > 30 ? 'Over 30' : 'Under 30'}
    `;

// ${variables, calculation, function, condition}
// document.body.innerHTML = html;

// 8. ARRAYS AND ARRAY METHODS

// Store multiplay values in one variables and these values can be mutated and iterated through and be used
// in some really complex algorithms.

// Create some arrarys
const arrary = [43,56,33,'apple','banana',true,undefined,null,{a:1, b:1},new Date()];
const arrary2 = new Array(43,56,33,23,44,36,5);
console.log(arrary);

let val;
// Get array length
val = arrary.length;
// Check if is arrary
val = Array.isArray(arrary);
// Get single value
val = arrary[1];
// Insert into arrary
arrary[0] = 'insert';
// Find index of value
val = arrary.indexOf('apple');

// MUTATING ARRARYS
// Add on to end: .push()
arrary.push('push');
// Add on to front: .unshift()
arrary.unshift('unshift');
// Take off from end: .pop()
arrary.pop();
// Take off from front: .shift()
arrary.shift();
// Splice values: .splice()
arrary.splice(0,4);
// Reverse: .reverse()
arrary.reverse();
// Concatenate arrary: .concat() 
val = arrary.concat(arrary2); 
// Sorting arrarys 
val = ['java', 'apple', 'hello'].sort(); 
// /return arrary in alphabetical order 
val = arrary2.sort(); 
val = arrary2.sort(function(x, y){return y - x;}); 
// Find function under50(num){ return num < 50; } 
val=arrary2.find(under50); 
console.log(val); 
console.log(arrary);