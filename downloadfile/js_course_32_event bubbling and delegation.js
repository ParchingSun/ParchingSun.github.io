// 32.EVENT BUBBLING AND DELEGATION
// Event bubbling is the bubbling up of event through the DOM. When event happens on a particular element in the DOM and will actually bubble through its parents.
// Event delegation is almost the opposite of event bubbling. Put a eventlistener and drag the target element to set event.

// Prove Event Bubbling
document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title');
});
document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card content');
});
document.querySelector('.card').addEventListener('click', function(){
    console.log('card');
});
document.querySelector('.col').addEventListener('click', function(){
    console.log('col');
});

// EVENT DELEGATION
// is useful when: 1.control mutiple elements at the same time; 2.dynamically insert sth into the DOM through js

// Example without event delegation
const deleteItem = document.querySelector('.delete-item');

deleteItem.addEventListener('click', delItem);

function delItem(){
    console.log('deleteItem');
}

// With event delegation
// example 1
document.body.addEventListener('click', delItem);

function delItem(e){
    if(e.target.className === 'fa fa-remove'){
        console.log('deleteItem');
    }
}

// example 2: use parent's className
document.body.addEventListener('click', delItem);

function delItem(e){
    if(e.target.parentElement.className === 'delete-item secondary-content'){
        console.log('deleteItem');
    }
    // or 
    if(e.target.parentElement.classList.contains('delete-item')){
            console.log('deleteItem');
            e.target.parentElement.parentElement.remove();
        }
}
