// CREATE AND ADD ELEMENTS
// Create element
const li = document.createElement('li');

// Add class

li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create textnode and append
li.appendChild(document.createTextNode('New List Item'));

// Create new link element and append to li
const link = document.createElement('a');
link.setAttribute('href', '#');
link.setAttribute('class', 'delete-item secondary-content');
li.appendChild(link);

// Create new icon element and append to link 
const i = document.createElement('i');
i.setAttribute('class', 'fa fa-remove');
link.appendChild(i);
// or
link.innerHTML = '<i class="fa fa-remove"></i>';

// append li as child to ul
document.querySelector('ul').appendChild(li);

console.log(li);

// REPLACE ELEMENT

// create element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));
// get oldheading element
const oldHeading = document.getElementById('task-title');
// parent
const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove by child
list.removeChild(lis[3]);

// REMOVE CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link2 = firstLi.children[0];

let val;
// Classes
val = link2.className;
val = link2.classList;
val = link2.classList[0];
link2.classList.add('test');
link2.classList.remove('test');


// Attritubes
val = link2.getAttribute('href');
val = link2.setAttribute('href', 'http://google.com');
val = link2.hasAttribute('href');
link2.setAttribute('title', 'Google');
link2.removeAttribute('title');

console.log(val);