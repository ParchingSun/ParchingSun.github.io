// Set element stype of homepage

// Three plates style: auto fit window width
let widthListener = setInterval(function(){
    const plate = document.querySelector('.plate');
    const body = document.querySelector('body');
    const part2 = document.querySelector('.part2');

    if(body.offsetWidth > 1000){
        body.style.overflowY = 'hidden';
        plate.style.flexDirection = 'row'; 
    } else {
        body.style.overflowY = 'visible';
        plate.style.flexDirection = 'column';
    }
},100);

