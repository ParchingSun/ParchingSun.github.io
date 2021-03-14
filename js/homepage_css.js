// Set element stype of homepage

// Three plates style: auto fit window width
function adjustParts() {
    const plate = document.querySelector('.plate');
    const body = document.querySelector('body');
    const part2 = document.querySelector('.part2');

    if(body.offsetWidth > 1300){
        // solve scrollY saty bottom when page is re-larger
        window.scrollTo(0,0);
        body.style.overflowY = 'hidden';
        plate.style.flexDirection = 'row'; 
    } else {
        body.style.overflowY = 'visible';
        plate.style.flexDirection = 'column';
    }
};
// history.scrollRestoration = 'manual';
window.addEventListener('resize', adjustParts);


// Index hover effect
// Define UI Vars
const link = document.querySelectorAll('li a');
const index = document.querySelector('ul');
const dataShowField = document.querySelector('.data-content');

// Add event listener
index.addEventListener('mousemove', showDateContent);
index.addEventListener('mouseout', clearDateContent);

// showDateContent
function showDateContent(e){
    if(e.target.tagName === 'A'){
        dataShowField.firstChild.innerHTML = e.target.getAttribute('data-content');
        // console.log(dataShowField.firstChild);
        // const words = document.querySelectorAll('.set div');
        // console.log(words);
        // words.forEach(function(wordtored){
        //     wordtored.style.color = 'red';
        // })
    } 
    e.preventDefault();
}

// clearDateContent
function clearDateContent(e){
    if(e.target.tagName === 'A'){
        dataShowField.firstChild.innerHTML = '';
    }
    e.preventDefault();
}

// 