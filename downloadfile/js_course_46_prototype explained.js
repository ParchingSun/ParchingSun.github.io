// 46.PROTOTYPES EXPLIANED
// Each object in javascript has a prototype and a prototype is an object itself
// All objects inherit their properties and methods from their prototype
// When you deal with objects literals then you're inheriting from a prototype called Object.prototype

// Object.prototype
// when you deal with objects that were created through a constructor like Person constructor
// it's going to come from Person.protype
// there's sth called the prototype chain where you have this prototype but then you can go up to the main object of prototype
// Person.prototype
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // firstName, lastName, birthday is properties
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    // calculateAge declared by this way is also properties
}

// the method that calculate age is the same for everyone, so we can put them in prototype but not as the object property
// So, let move caculateAge to Person.prototype
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMaried = function(newLastName){
    this.lastName = newLastName;
}
const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(john.calculateAge()); // 30
console.log(mary);
console.log(mary.getFullName()); // Mary Jonhnson
mary.getsMaried('Smith'); 
console.log(mary.getFullName()); // Mary Smith
console.log(mary.hasOwnProperty('firstName')); // true
console.log(mary.hasOwnProperty('getFullName')); // false, cause it not the property of the object but in prototype