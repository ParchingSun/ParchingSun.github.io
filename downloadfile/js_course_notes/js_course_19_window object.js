// 19.WINDOW OBJECTS
// the DOM of the document object model

// look at the window object first
// the window is the global object in client side javascript
// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
window.alert('Hello World!');

// Prompt
const input = prompt();
alert(input);// can be called without window

// Confirm
// often used in deleting something 
if(confirm('Are you sure')){
    console.log('YES');
} else {
    console.log('NO');
}

let val;

//  Outter height and width
val = window.outerHeight;
val = window.outerWidth;

//  Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.search;

// Redirect
window.location.href = 'http://google.com';

// Reload
window.location.reload();

// Histroy Object
window.history.go(-1);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;

console.log(val);
