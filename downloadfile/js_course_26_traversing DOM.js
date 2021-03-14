let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


// Get child nodes()
// return node list
val = list.childNodes; //contain both textnodes and children elements
val = list.childNodes[0];
val = list.childNodes[1].nodeType;
// 1- Element
// 2 - Attribute(deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
// return HTML collection
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'HELLO';

// Child of child 
val = list.children[3].children;
// First child and elementchild
val = list.firstChild;
val = list.firstElementChild;
// Last child and last elementchild
val = list.lastChild;
val = list.lastElementChild;
// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
// Get prev sibling
val = listItem.previousElementSibling;

console.log(val);