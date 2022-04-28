// 45.BUILT IN CONSTRUCTORS
// there are other core objects that hava constructors as well as Date
// but most of them are not advisable to use, cause they will cause inconvenience(slow things down) and confuse
// for instance, primitive types like strings, numbers, booleans

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';

console.log(name1);
console.log(name2);

// Troubles
console.log(typeof name2);

if(name2 === 'Jeff'){
    console.log('Yes');
} else {
    console.log('No');  //get 'No' only if we change === to == will we get 'Yes'
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2); // get 'object' not 'number'

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2); // get 'object' not 'number'

// Function
const getSum1 = function(a, b){
    return a + b;
}
const getSum2 = new Function('a', 'b', 'return a + b');

console.log(getSum1(1,1)); // return 2
console.log(getSum2(1,1)); // return 2

// Object
const john1 = {name: 'john'};
const john2 = new Object({name: 'john'});
console.log(john1);
console.log(john2);

// Arrarys
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
console.log(arr1);
console.log(arr2);

// Regular Expressions
const re1 = /\w+/; //means we are looking for a word character that occurs one or more times
const re2 = new RegExp('\\w+'); //need a more backslash

console.log(re1);
console.log(re2);