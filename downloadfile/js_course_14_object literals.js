const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@qq.com',
    bobbies: ['music', 'sports'],
    // distinguish arrary and object
    address: {
        city : 'Miami',
        state : 'FL',
    },
    getBirthYear: function(){
        return 2020 - this.age;
    }
}

let val = person;

// Get specific value
val = person.firstName;
val = person['firstName'];
val = person.bobbies[0];
val = person.addres.state;
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 36},
    {name: 'Jake', age: 26},
]
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}