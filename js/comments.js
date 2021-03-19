
// AUTO COMMENTS POSTION

function addComment() {
// Define basic vars
const contentR = Array.from(document.querySelector('.article').children);
const comments = document.querySelectorAll('.comments');
const lineHeightP = 40; // para line height
const lineHeightC = 40; // comment line height

// Create object to store the marginTop of paras with * 
function CommentsMar(){
    this.oHA = []; // offsetHeight array
    this.mTA = []; // margin top array
    this.tLNA = []; // total lines number array
}

// Go over all paras and get their offsetHeight
CommentsMar.prototype.getAllCommentsHeight = function(array) {
    array.forEach(function(para) {
        let paraTop;
        let paraCon = para.textContent;

        if (para.className === 'para' && paraCon.includes('[')){
            for(let i = 0; i < paraCon.length; i++){
                if(paraCon.charAt(i) === '['){
                    // define para lines and which line [ belong
                    let linesP = para.offsetHeight / lineHeightP;
                    let linesB; // lines belong
                    let posInPara = (i + 1) / (paraCon.length - 13); // -13 is unclear!
                    linesB = Math.ceil(posInPara * linesP);
                    paraTop = (para.offsetTop - 8 + (linesB - 1) * lineHeightP); // -8 is unclear!
                    this.oHA.push(paraTop);
                }
            }
        };
    }, this)
}

// Get total line array of comments
CommentsMar.prototype.getCommentsLines = function() {
    let linesC = 0;
    comments.forEach(function(com) {
        let lines = com.offsetHeight / lineHeightC;
        linesC += lines;
        this.tLNA.push(linesC);
    }, this) // 'this' is very useful when you create a foreach loop in a object
}


// Covert offsetHeight to margin-top between the first comment and target comment
CommentsMar.prototype.getAllCommentsSequence = function() {
    // initialize
    this.mTA[0] = this.oHA[0];
    this.mTA[1] = this.oHA[1] - this.oHA[0] - this.tLNA[0] * lineHeightC;

    // define margin-top between the first comment and target comment
    let allMarginTop = this.mTA[1];

    for(let i = 2; i < this.tLNA.length; i++) {
        // allmargintop = offsetHeight - total comments line-height- total margin-top before
        this.mTA[i] = this.oHA[i] - this.oHA[0] - this.tLNA[i-1] * lineHeightC - allMarginTop;
        // set min-margin-top, avoid comments hide eaother
        if(this.mTA[i] < 0) {
            this.mTA[i] = 0;
            // console.log(i, 0);
        };
        allMarginTop += this.mTA[i];
    }
}


const marginTopData = new CommentsMar();
marginTopData.getAllCommentsHeight(contentR);
marginTopData.getCommentsLines();
marginTopData.getAllCommentsSequence();


// Set comments postion
comments.forEach(function(com, index) {
    // window.getComputedStyle(com, null).marginTop = marginTopData.paraTopArray[index];
    // window.getComputedStyle(ele, ) is useful but reaad-only !!
    // console.log(index);
    com.style.marginTop = `${marginTopData.mTA[index]}px`;
})
}




