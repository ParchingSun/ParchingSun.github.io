// 18.GENERAL LOOPS
// loop in an instruction that repeats until specific condition is reached


// // FOR LOOP
// use for loop when you know how many iteration it's going to run
for(let i = 0; i < 10; i++){
    // insert action into loops
    if(i === 2){
        console.log('2 is my favorite number');
        continue; //skip to next iteration
    }
    // break loop
    if(i === 5){
        console.log('stop the loop')
        break;
    }
    console.log(i);
}


// WHILE LOOP
// use for loop when you are unclear how many iteration it's going to run(not very specific)
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}


// DO WHILE LOOP
// run loop at least one time
let i = 100;
do{
   console.log(i);
   i++; 
}
while(i < 10);


// LOOP THROUGH ARRARYS
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}


// FOREACH LOOP
cars.forEach(function(car, index, arrary){
    console.log(`${index}: ${car}`);
});


// MAP LOOP
// usually used in return something different
const users = [
    {id:2015202072, name: 'John'},
    {id:2014309432, name: 'Sara'},
    {id:2014783689, name: 'Karen'},
    ];
const ids = users.map(function(user){
    return user.id;
})

console.log(ids);

// FORIN LOOP 
// usually used in object to get key value pairs

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
}

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}
