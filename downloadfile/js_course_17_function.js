// 17.FUNCTION
//functions are blocks of code that can be defined and then called at a later time or in some cases

// FUNCTION DECLARATIONS
function greet(firstName, lastName){
    if(typeof firstName === 'undefined' && typeof lastName !== 'undefined'){
        firstName = '';
    }
    if(typeof firstName !== 'undefined' && typeof lastName === 'undefined'){
        lastName = '';
    }
    if(typeof firstName === 'undefined' && typeof lastName === 'undefined'){
        firstName = 'my';
        lastName = 'friend';
    }
    return 'hello ' + firstName + ' ' + lastName;
}

console.log(greet('Sun'));
// to give argument default values, we can use: function greet(firstName = my, lastName = friend){}


// FUNCTION EXPRESIONS
// putting a function as a variable assignment
const square = function(x = 3){
    return x * x;
};

console.log(square());


// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// functions declare and run at the same time

(function(name){
    console.log(`hello ${name}`);
})('Brad');


// PROPERTY METHODS
// when a function is putted in an object, we call it methods.

const todo = {
    add: function(x, y){
        return x + y;
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('delete todo ...');
}

console.log(todo.add(2,3));
todo.edit('pancheng');
console.log(todo);