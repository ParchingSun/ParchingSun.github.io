
const xhr = new XMLHttpRequest();

function showTxt(callback) {
    
    const name = window.location.pathname.split('/')[window.location.pathname.split('/').length-1].split('.')[0];

    xhr.open('GET', `../article txt/${name}.txt`, true);


    xhr.onload = function() {
        let article = document.querySelector('.article');
        let pureText = xhr.responseText;

        // insert h4 and img tags
        pureText = insertTags(pureText, '####', 'h4');
        pureText = insertTags(pureText, '@@@@', 'img');

        // A Wrong Example: charAt will ingore space, so 

        // splict string to sub-string array
        let para = pureText.split('\n'); // enter but not space
        let con = ``;

        // create paragraph div
        para.forEach(function(para) {
            if(para.includes('h4') || para.includes('img')){
                con += para;
            } else {
                let div = `<div class="para">${para}</div>`;
                con += div;
            }
        })

        // add paragraph div to container
        article.innerHTML += con;

        callback();
    }
    xhr.send();
}

function insertTags(text, target, repl) {

    if(target === '####') {
        // Get the titles number
        let headNum = 0;
    
        for(let i = 0; i < text.length; i++) {
            if(text.charAt(i) === '#') {
                headNum++;
            }
        }
    
        headNum = headNum / 8;
    
        // Replace every #### with h4
        for(let i = 0; i < headNum; i++){
            let start = text.indexOf(target);
            let end = text.indexOf(target, start + 4);
        
            text = text.slice(0, start) + `<${repl}>` + text.slice(start + 4, end) + `</${repl}>` + text.slice(end + 4);
        }
    
        return text;
    } else if (target === '@@@@') {
        // Get the image number
        let imgNum = 0;
    
        for(let i = 0; i < text.length; i++) {
            if(text.charAt(i) === '@') {
                imgNum++;
            }
        }
    
        imgNum = imgNum / 8;
    
        // Replace every @@@@ with img
        for(let i = 0; i < imgNum; i++){
            let start = text.indexOf(target);
            let end = text.indexOf(target, start + 4);
        
            text = text.slice(0, start) + `<${repl}` + ` src="${text.slice(start + 4, end)}">` + text.slice(end + 4);
        }

        return text;
    }


}

showTxt(function() {
    const para = document.querySelectorAll('.para');
    // Change text indent of paragraph for lang=en page
    if (document.documentElement.lang == 'en') {
        para.forEach(function(para) {
            para.style.textIndent = '0px';
            para.style.fontFamily = '\'Courier New\', Courier, monospace';
        });
    } else if (document.documentElement.lang == 'zh-SG') {
        para.forEach(function(para) {
            para.style.textIndent = '0px';
        });
    }
});



