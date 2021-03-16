// This file offer floatting-word background for allmost every page

// Insert html elements
function background() {
    let containerHtml = document.querySelector('.background');
    containerHtml.innerHTML = `
        <div class="set">
            <div>所</div>
            <div>不</div>
            <div>积</div>
            <div>博</div>
            <div>之</div>
            <div>无</div>
            <div>以</div>
            <div>风</div>
            <div>千</div>
            <div>里</div>
        </div>
        <div class="set set2">
            <div>青</div>
            <div>取</div>
            <div>之</div>
            <div>于</div>
            <div>蓝</div>
            <div>木</div>
            <div>直</div>
            <div>中</div>
            <div>绳</div>
            <div>轮</div>
        </div>
        <div class="set set3">
            <div>鞣</div>
            <div>登</div>
            <div>高</div>
            <div>博</div>
            <div>见</div>
            <div>金</div>
            <div>就</div>
            <div>砺</div>
            <div>顺</div>
            <div>风</div>
        </div>
    `;
}
background();

// Insert style into 'head style'
// let style = document.querySelector('head style').innerHTML;
function setStyle() {

    const bodyHeight = document.body.offsetHeight * 0.7;
    
    // Aviod scrollY float in short page
    if(bodyHeight < window.innerHeight) {
        console.log(`document.body.offsetHeight-bg: ${document.body.offsetHeight}`);
        console.log(`window.innerHeight-bg: ${window.innerHeight}`);
        document.body.style.overflowY = 'hidden';
    }
    
    document.querySelector('head style').innerHTML = 
        `
            section.background {
                position: absolute;
                width: 100%;
                height: ${bodyHeight}px;
                z-index: -1;
            }
            .set {
                width: 60%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            
            }
            .set div {
                font-family: gudianminchao;
                font-size: 6rem;
                color: black;
                position: absolute;
                display:block;
                opacity: 0;
                user-select: none;
            }
            .set div:nth-child(1){
                left: 10%;
                animation: animate ${bodyHeight/900*15}s linear infinite;
                animation-delay: -9s;
            }
            .set div:nth-child(2){
                left: 30%;
                animation: animate ${bodyHeight/900*20}s linear infinite;
                animation-delay: -5s;
            }
    
            .set div:nth-child(3){
                left: 50%;
                animation: animate ${bodyHeight/900*25}s linear infinite;
                animation-delay: -2s;
            }
    
            .set div:nth-child(4){
                left: 70%;
                animation: animate ${bodyHeight/900*30}s linear infinite;
                animation-delay: -7s;
            }
    
            .set div:nth-child(5){
                left: 90%;
                animation: animate ${bodyHeight/900*13}s linear infinite;
                animation-delay: -8s;
            }
    
            .set div:nth-child(6){
                left: 110%;
                animation: animate ${bodyHeight/900*22}s linear infinite;
                animation-delay: -8s;
            }
    
            .set div:nth-child(7){
                left: 130%;
                animation: animate ${bodyHeight/900*27}s linear infinite;
                animation-delay: -18s;
            }
    
            .set div:nth-child(8){
                left: 150%;
                animation: animate ${bodyHeight/900*23}s linear infinite;
                animation-delay: -10s;
            }
    
            .set div:nth-child(9){
                left: 80%;
                animation: animate ${bodyHeight/900*18}s linear infinite;
                animation-delay: -7s;
            }
    
            .set div:nth-child(10){
                left: 100%;
                animation: animate ${bodyHeight/900*11}s linear infinite;
                animation-delay: -1s;
            }
    
            @keyframes animate {
                0%{
                    opacity: 0;
                    top: 10%;
                }
                20%{
                    transform: translateX(-20px) rotate(45deg);
                    opacity: 0.15;
                }
                40%{
                    transform: translateX(-20px) rotate(90deg);
                }
                60%{
                    transform: translateX(20px) rotate(135deg);
                }
                80%{
                    transform: translateX(-20px) rotate(180deg);
                    opacity: 0.15;
                }
                100%{
                    opacity: 0;
                    top: 90%;
                    transform: translateX(-20px) rotate(225deg);
                }
            }
            .set2{
                transform: scale(2) rotateY(180deg);
                filter: blur(2px);
            }
            .set3{
                transform: scale(0.8) rotateX(180deg);
                filter: blur(4px);
            }
        `;
}
setStyle();

// Hide and show index
const indexBar = document.querySelectorAll('.index-con');

indexBar.forEach(function(book) {
    book.nextElementSibling.style.display = 'none';
    book.addEventListener('click', function(e){
        if(book.nextElementSibling.style.display === 'none'){
            book.nextElementSibling.style.display = 'block';
        } else {
            book.nextElementSibling.style.display = 'none';
        }
        e.preventDefault();
    });
});

