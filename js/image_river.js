var heart = document.getElementsByClassName('grid-container');
var pfx = ["webkit", "moz", "MS", "o", ""];
var hovered = false;

heart[0].style.background = 'red';
heart[1].style.background = 'blue';
function AnimationListener() {
if(hovered)
{ 
    // heart[0].style.transform ='scale(3)';
    var position = window.getComputedStyle(heart[0]).getPropertyValue('top');
    heart[0].classList.remove('animated'); 
    console.log(position);
    heart[0].style.top = position + 'px';
  
}
}
function TransitionListener() {
if(!hovered)
{
heart[0].classList.add('animated');
}
}
function PrefixedEvent(element, type, callback) {
for (var p = 0; p < pfx.length; p++) {
if (!pfx[p]) type = type.toLowerCase();
element.addEventListener(pfx[p]+type, callback, false);
}
}

PrefixedEvent(heart[0], "AnimationIteration", AnimationListener);
heart[0].onclick = function() {
    hovered = true;
    AnimationListener();
    }
heart[0].onmouseout = function() {
    setTimeout(function() { hovered = false; }, 500);
    // heart[0].style.AnimationPlayState = "running";
    PrefixedEvent(heart[0], "TransitionEnd", TransitionListener);
    heart[0].style.transform = 'scale(1)'; 
    
}
