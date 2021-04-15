
const xhr = new XMLHttpRequest();

function showTxt(callback) {
    
    const name = window.location.pathname.split('/')[window.location.pathname.split('/').length-1].split('.')[0];

    xhr.open('GET', `../article txt/${name}.txt`, true);


    xhr.onload = function() {
        let article = document.querySelector('.article');
        let pureText = xhr.responseText;

        // insert tags
        // pureText = insertTags(pureText, '####', 'h4');
        pureText = insertTags(pureText, '@', 'img');
        pureText = insertTags(pureText, '$');
        pureText = insertTags(pureText, '|', 'quote');
        pureText = insertTags(pureText, '*', 'strong');
        pureText = insertTags(pureText, '+', 'comment');



        // A Wrong Example: charAt will ingore space, so 

        // splict string to sub-string array
        let para = pureText.split('\n'); // enter but not space
        let con = ``;

        // create paragraph div
        para.forEach(function(para) {
            if(para.includes('#')){
                para = insertTags(para, '#', null);
                con += para;
            } else if(para.includes('img')){
                con += para;
            } else if(para.includes('$')) {
                con = con;
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

    if(target === '#') {
        // Get the titles number
        let titleNum = 0;
    
        for(let i = 0; i < text.length; i++) {
            if(text.charAt(i) === '#') {
                titleNum++;
            }
        }
    
        const titleLev = titleNum / 2;
    
        // Replace every #### with h4
        let start = text.indexOf(target);
        let end = text.indexOf(target, start + titleLev);
        
        text = text.slice(0, start) + `<h${titleLev}>` + text.slice(start + titleLev, end) + `</h${titleLev}>` + text.slice(end + titleLev);

    
        return text;
    } else if (target === '@') {
        // Get the image number
        let imgNum = 0;
    
        for(let i = 0; i < text.length; i++) {
            if(text.charAt(i) === '@') {
                imgNum++;
            }
        }
    
        imgNum = imgNum / 2;
    
        // Replace every @ with img
        for(let i = 0; i < imgNum; i++){
            let start = text.indexOf(target);
            let middle = text.indexOf('~', start + 1);
            let end = text.indexOf(target, start + 1);

            console.log(start, middle, end);
            
            console.log(text.slice(middle + 1, end));
            text = text.slice(0, start) + `<div class="imgInfo">${text.slice(start + 1, middle)}</div>` + `<${repl}` + ` src="${text.slice(middle + 1, end)}">` + text.slice(end + 1) ;
        }

        return text;
    } else if (target === '$') {
        // Get the the last update content
        let end = text.lastIndexOf(target);
        let start = text.lastIndexOf(target, end-1);

        // get update content and time in the head of page
        const upCon = text.slice(start + 1, end);
        const upTim = document.lastModified;
        if(document.getElementById('time')) {
            document.getElementById('time').innerText = `更新时间：${upTim}  更新内容：${upCon}`;
        }

        return text;
    } else if (target === '|') {
        // Get the quote number
        let quoNum = 0;
    
        for(let i = 0; i < text.length; i++) {
            if(text.charAt(i) === '|') {
                quoNum++;
            }
        }
    
        quoNum = quoNum / 2;
    
        // Replace every | with span.quote
        for(let i = 0; i < quoNum; i++){
            let start = text.indexOf(target);
            let end = text.indexOf(target, start + 1);
            
        
            text = text.slice(0, start) + `<span class="${repl}">` + text.slice(start + 1, end) + `</span>` + text.slice(end + 1);
        }

        return text;
    } else if (target === '*') {
        // Get the strong number
        let strNum = 0;
    
        for(let i = 0; i < text.length; i++) {
            if(text.charAt(i) === '*') {
                strNum++;
            }
        }
    
        strNum = strNum / 2;
    
        // Replace every | with span.quote
        for(let i = 0; i < strNum; i++){
            let start = text.indexOf(target);
            let end = text.indexOf(target, start + 1);
        
            text = text.slice(0, start) + `<span class="${repl}">` + text.slice(start + 1, end) + `</span>` + text.slice(end + 1);
        }

        return text;
    } else if (target === '+') {
        // Get the comment number
        let comNum = 0;
    
        for(let i = 0; i < text.length; i++) {
            if(text.charAt(i) === '+') {
                comNum++;
            }
        }
    
        comNum = comNum / 2;
    
        // Replace every + with [] and create comment div
        for(let i = 0; i < comNum; i++){
            let start = text.indexOf(target);
            let end = text.indexOf(target, start + 1);

            // get comments text
            const comText = text.slice(start + 1, end);

            text = text.slice(0, start) + `[${i+1}]` + text.slice(end + 1);
            
            // create comments
            const comdiv = document.createElement('div');
            comdiv.className = 'comments';
            comdiv.innerText = `[${i+1}]${comText}`;

            // append comments to the page
            const conBar = document.querySelector('.commentbar');
            conBar.appendChild(comdiv);
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
    // add Comments -> comments.js
    addComment();
});
