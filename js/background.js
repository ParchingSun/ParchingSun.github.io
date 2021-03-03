// This file offer floatting-word background for allmost every page

function background() {
    let containerHtml = document.querySelector('.background');
    containerHtml.innerHTML = `
        <div class="set">
            <div></div>
            <div>不</div>
            <div>积</div>
            <div>跬</div>
            <div>步</div>
            <div>无</div>
            <div>以</div>
            <div>至</div>
            <div>千</div>
            <div>里</div>
        </div>
        <div class="set set2">
            <div>文</div>
            <div>学</div>
            <div>劝</div>
            <div>荀</div>
            <div>子</div>
            <div>文</div>
            <div>字</div>
            <div>的</div>
            <div>力</div>
            <div>量</div>
        </div>
        <div class="set set3">
            <div>文</div>
            <div>字</div>
            <div>的</div>
            <div>力</div>
            <div>量</div>
            <div>文</div>
            <div>字</div>
            <div>的</div>
            <div>力</div>
            <div>量</div>
        </div>
    `;
}
background();