const xhr = new XMLHttpRequest();

showTxt();

function showTxt() {
    
    const name = window.location.pathname.split('/')[window.location.pathname.split('/').length-1].split('.')[0];

    xhr.open('GET', `../article txt/${name}.txt`, true);


    xhr.onload = function() {
        let article = document.querySelector('.article');

        // A Wrong Example: charAt will ingore space, so 

        // splict string to sub-string array
        let para = xhr.responseText.split('\n'); // enter but not space
        let con = ``;
        // create paragraph div
        para.forEach(function(para) {
            let div = `<div class="para">${para}</div>`
            con += div;
        })
        // add paragraph div to container
        article.innerHTML += con;

        console.log(`document.body.offsetHeight: ${document.body.offsetHeight}`);
        console.log(`window.innerHeight: ${window.innerHeight}`);
        setStyle();

    }
    xhr.send();
}