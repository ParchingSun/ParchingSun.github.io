var content = document.getElementsByClassName('content');
var comments = document.getElementsByClassName('comment');
function padding() {
    var bgheight = content[0].clientHeight;
    console.log(bgheight);
    console.log('document.body.clientHeight' + document.documentElement.clientHeight);
    if(bgheight < document.documentElement.clientHeight){
        document.getElementsByClassName('background')[0].style.height = document.documentElement.clientHeight + 'px';
        document.body.parentNode.style.overflowY = "hidden";
    }
    else{
    document.getElementsByClassName('background')[0].style.height = bgheight + 100 + 'px';
    }
    var number = comments.length - 1;
    var i = 0;
    while (i <= number) {
        console.log(number);
        comments[i].style.position = 'absolute';
        comments[i].style.left = '650px';
        var top = window.getComputedStyle(comments[i]).getPropertyValue('top');
        console.log(top);
        var height = comments[i].clientHeight;
        console.log(height);
        var mar_top = parseInt(top) - height;
        console.log(mar_top);
        comments[i].style.top = mar_top - 16 + 'px';
        i = i + 1;
        console.log(i);
    }
}
