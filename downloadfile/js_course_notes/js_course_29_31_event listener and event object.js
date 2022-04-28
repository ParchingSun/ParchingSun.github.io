// 29_31.EVENT LISTENERS AND THE EVENT OBJECT
// interaction with the ui/webpage---event 

// EVENT LISTENERS
// Example 1
document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Hello World');
    //prevent default link behavior like redirection to other page which will refresh console
    e.preventDefault();   
});

// Example 2 -- much neater
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    console.log('Hello World');

    let val;
    
    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.textContent = 'HELLO';

    // Event type
    val = e.type;
    
    // Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;
    
    // Coords event relative to the element itself
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}

// EVENT OBJECT

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Event Handler
function runEvent(e){
    console.log(`Event type: ${e.type}`);
    heading.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// Click
clearBtn.addEventListener('click', runEvent);

// Doubleclick
clearBtn.addEventListener('dblclick', runEvent);

// Mousedown and Mouseup
clearBtn.addEventListener('mousedown', runEvent);  //click and hold
clearBtn.addEventListener('mouseup', runEvent);  //click and loose

// Mouseenter and Mouseleave
// fire only when mouse go across border of the mother elements
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);

// // Mouseover and Mouseout
// fire when mouse go across interal borders of child-elements of the main elements
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);

// KEYBOARD AND INPUT EVENT
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// Keydown(tap the key)
taskInput.addEventListener('keydown', runEvent);

// Keyup(release the key)
taskInput.addEventListener('keyup', runEvent);

// Keypress(text in entered)
taskInput.addEventListener('keypress', runEvent);

// Focus & Blur
taskInput.addEventListener('focus', runEvent);  // Click in to input
taskInput.addEventListener('blur', runEvent);   // Click out

// // Cut & Paste
taskInput.addEventListener('cut', runEvent); 
taskInput.addEventListener('paste', runEvent); 

// Input(keydown, keyup, keypress, focus, blur)
taskInput.addEventListener('input', runEvent); 

// Submit
form.addEventListener('submit', runEvent);

// Change(for select element only)
select.addEventListener('change', runEvent);

// Event Handler
// usually, when submitting a form, it will redirect to a new page.
function runEvent(e){
    console.log(`Event type: ${e.type}`);

    console.log(`Value: ${e.target.value}`);

    heading.innerText = `${e.target.value}`;

    // get input value
    console.log(taskInput.value);
    e.preventDefault();
}
