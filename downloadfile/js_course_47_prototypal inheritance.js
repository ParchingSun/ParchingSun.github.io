// 47.PROTOTYPAL INHERITANCE
// Person constructor
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
// Add Greeting() and goodbye() to Person.prototype
Person.prototype.greeting = function(){
    return `Hello, there ${this.firstName} ${this.lastName}`;
}
Person.prototype.goodbye = function(){
    return `Goodbye ${this.firstName} ${this.lastName}`;
}
const person1 = new Person('John', 'Doe');

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    // call is a function that allow us to call another function from somewhere else in the current context
    
    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Custormer greeting and goodbye
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
}
Customer.prototype.goodbye = function(){
    return `Goodbye ${this.firstName} ${this.lastName}, we are looking for our next meeting`;
}


console.log(customer1.greeting()); 
console.log(person1.greeting());
// Any prototype methods that we add to the person will be accessible through the customer
// however customer.prototype methods can be changed without affecting person.prototype
console.log(customer1.goodbye()); 
console.log(person1.goodbye());