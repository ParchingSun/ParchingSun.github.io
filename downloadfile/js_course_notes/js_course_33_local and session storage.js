// 33.LOCAL STORGE API

// Set local storge item

// local storge will stay until you manually clear it out in your settings
// session storge wil go away once your browser is closed
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');
sessionStorage.setItem('name', 'Kitty');

// Remove from storage
localStorage.removeItem('name');

// Get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

console.log(name, age);

// // Clear local storage
localStorage.clear();

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved');
    
    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});

// JOSN.parse() && JSON.stringify()

// The JSON object, available in all modern browsers, has two useful methods to deal with JSON-formatted content: parse and stringify.
// JSON.parse() takes a JSON string and transforms it into a JavaScript object.
// JSON.stringify() takes a JavaScript object and transforms it into a JSON string.

// Example:
const myObj = {
    name: 'Skip',
    age: 2,
    favoriteFood: 'Steak',
};

const myObjStr = JSON.stringify(myObj);

const StrToObj = JSON.parse(myObjStr);

console.log(`Type of myObjStr: ${typeof myObjStr}`, myObjStr);
console.log(`Type of StrToObj: ${typeof StrToObj}`, StrToObj);

const ObjToAry = Object.entries(StrToObj);

console.log(ObjToAry);

ObjToAry.forEach(function(obj){
    console.log(obj);
})
