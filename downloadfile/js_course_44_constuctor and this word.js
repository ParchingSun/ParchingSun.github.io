// Object-oriented programming in js
// In a couple of most important things an object oriented programming in just about any language is the constructor and keywords

// Person constructor
function Person(name, age, dob){
    this.name = name;
    // this refers to the current instance of the object
    // in this case, it pertains to the person, it pertains to this
    console.log(this); // refer to person

    this.age = age;
    
    this.birthday = new Date(dob);
    // Date object all used constructor, so we call 'new Date()'

    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
        // getUTCFullYear() can only be used by dateObj
        // Math is the object you don't need to use the 'new' word
    }
}

console.log(this); // refer to the window
this.alert(1); // equal to window.alert(1)

// Instantiate object
const brad = new Person('Brad', 36);
const john = new Person('John', 30);

console.log(brad);
console.log(john);

const brad = new Person('Brad', '1-4-1997');
console.log(brad);
console.log(brad.calculateAge());