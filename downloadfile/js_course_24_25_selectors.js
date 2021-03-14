// vanilla javascript VS J Queery
// J Queery is not good for DOM manipulation

// ELEMENT SELECTORS

// Single Elements Selectors
// if there are mutiple elements apply to selector, it will only choose the first one
// document.getElementById
console.log(document.getElementById('task-title'));
// get things from the element
console.log(document.getElementById('task-title').id);
// change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
// change the content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style = color:red>Task List</span>';
// set element to variables
const taskTitle = document.getElementById('task-title');
taskTitle.innerText = 'Boom!';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('ul li'));

document.querySelector('li:nth-child(3)').style.color = 'red';
document.querySelector('li:nth-child(3)').textContent = 'red';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';// donot work--single ele selector
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';// donot work--single ele selector

// Multiple Elements Selectors
// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item'); //select globally

console.log(items);
console.log(items[0]);
items[0].style.background = 'black';

let listItems = document.querySelector('ul').getElementsByTagName('a'); //select in specific scope
console.log(listItems);

// Convert HTMLCollection into Array
listItems = Array.from(listItems);

listItems.reverse();

console.log(listItems);
listItems.forEach(function(listItems){
  console.log(listItems.getAttribute('class'));
  listItems.innerHTML = '<span>Delete</span><i class="fa fa-remove"></i>';
});

// document.getElementsByTagName

// document.querySelectorAll
// return nodelist which do not need convert to array when use foreach loop
// Now we have three type of mutiple elements, HTMLCollection, nodelist, arrary, the last two can use forEach loop directly
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(list,index){
  list.textContent = `${index}: Hello`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(listOdd,index){
  listOdd.style.background = '#ccc';
})
const liEven = document.querySelectorAll('li:nth-child(even)');
liEven.forEach(function(listEven,index){
  listEven.style.background = '#f4f4f4';
})
console.log(items);
