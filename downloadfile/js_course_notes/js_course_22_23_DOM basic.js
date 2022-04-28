// 22-23.DOM BASIC
// DOM = DOCUMENT OBJECT MODEL
// Tree of nodes / elements created by the browser
// JavaScript can be used to read/write/manipulate to the DOM
// Object orienten representation: each node has its own set of properties and methods that we can change, add or remove

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.doctype;
val = document.domain;
val = document.URL;

val = document.forms;
val = document.forms[0].id;

val = document.links;
val = document.links[2];
val = document.links[2].className;
val = document.links[2].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');


let scripts = document.scripts;

console.log(scripts);// HTMLCollection cannot use forEach loop

let scriptsArr = Array.from(scripts); // Transfer

console.log(scriptsArr); // Arrary  can use 

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);