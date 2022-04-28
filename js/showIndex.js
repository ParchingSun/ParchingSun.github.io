
const head = document.querySelector('h2').innerText;

let part;
let num;

switch(head) {
    case '游戏体验与分析':
    case '游戏剧情创作':
        part = 'game';
        num = 10;
        break;
    case '《建安五年春》':
    case '《卷耳》':
    case '《茶山巫蛇》':
    case '《夜读聊斋听鬼哭》':
        part = 'jian';
        num = 11;
        break;
    case '专业学习':
        part = 'study';
        num = 5;
        break;
    case '工具掌握':
        part = 'tools';
        num = 3;
        break;
    case '散论杂议':
        part = 'topic'
        num = 3;
        break;
    case '基本文章':
        part = 'basic'
        num = 2;
        break;
}



// Add window load listener
window.addEventListener('load', showIndex);

function showIndex() {

    let partNames = [];

    const index = document.querySelector('.index');
    
    for (let i = 0; i < num; i++) {
        
            // Open file
            let indexs = new XMLHttpRequest();

            indexs.open('GET', `${part}-${i}.html`, true);

            indexs.onload = function () {

                // Get partName
                let partName = getPageNames(indexs, 'h2');
                
                if(! partNames.includes(partName)) {

                    partNames.push(partName);

                    const h3 = document.createElement('h3');
                    h3.className = 'index-titles';
                    h3.innerText = `${partName}`;
                    h3.addEventListener('click', hideOrShowIndex);

                    const ul = document.createElement('ul');
                    ul.className = `${partName}`;

                    const listL = document.createElement('li');
                    listL.appendChild(h3);
                    listL.appendChild(ul);

                    const ulL = document.createElement('ul');
                    ulL.appendChild(listL);

                    index.appendChild(ulL);
                }

                // Get page names
                let pageName = getPageNames(indexs, 'h3');

                let a = document.createElement('a');
                a.setAttribute('href', `${part}-${i}.html`);
                a.innerText = pageName;

                let li = document.createElement('li');
                li.appendChild(a);

                document.getElementsByClassName(`${partName}`)[0].appendChild(li);

            };
            
            indexs.send();
        }
        
}

document.getElementsByClassName('index')[0].innerHTML += `<h4><a href="../../homepage.html">返回主页</a></h4>`;
// const titles = document.querySelectorAll('.index-titles');
    
//     titles.forEach(function(tar) {
//         tar.addEventListener('click', hideOrShowIndex);
//     });

function getPageNames(obj, hx) {

    let start = obj.responseText.indexOf(`<${hx}>`) + 4;
    let end = obj.responseText.indexOf(`</${hx}>`);
    return obj.responseText.substring(start, end);
}

// function hideIndexAuto(tit) {
//     let scrT = window.pageYOffset;
//     console.log(scrT);
//     if(scrT > 50) {
//         tit.forEach(function(t) {
//             t.nextElementSibling.style.display = 'none';
//         });
//     }
// }

function hideOrShowIndex(e) {
    let style = e.target.nextElementSibling.style.display;
    if(style === 'none'){
        e.target.nextElementSibling.style.display = 'block';
    } else {
        e.target.nextElementSibling.style.display = 'none';
    }
}