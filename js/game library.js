
// Create Push object to define forEach() loop
function Push(type, data) {
    this.type = type;
    // this.type can only be passed to son function, but not grandson function, why?
    this.data = data;

    // Push data to web
    this.pushData = function () {
        for (let i = 0; i < this.data.length; i++) {
            document.querySelector(`#${this.type}`).innerHTML += `<div class="para">${this.data[i]}</div>`;
        }
    }
}

// Create object to Store game names
const rpgS = new Push('rpg', ['巫师2', '巫师3', '侠盗猎车手5', '荒野大镖客2', '刺客信条：起源', '刺客信条：大革命', '无主之地3','古剑奇谭3', '传说之下 (undertale)', '王权的陨落：巫师传说', '神之灰烬：救赎','肯·弗雷特的上帝支柱(Ken Follett\'s The Pillars of the Earth)', '中土世界：战争之影', '古墓丽影：崛起', '疯狂的麦克斯', '隐形守护者']);
const actS = new Push('act', ['黑帝斯', '空洞骑士', '真人快打X (Mortal Kombat X)', '狙击精英4', '死亡细胞','幽林怪谈','','','']);
const advS = new Push('adv', ['Astroneer', 'Beholder',  '蜡烛人', 'GRIS', , '三位一体4：梦魇王子（trine 4: the nightmare prince)', '奇异人生(Life is strange)', '精灵与萤火意志(Ori and the Will of the Wisps', '时空幻境', '桥(The Bridge)', '丛林王座(The crown of leaves)', '返校(Detentin)', '我和她的世界末日', '终点咖啡馆(Necrobarista)']);
const simS = new Push('sim', ['异星工厂', '城市：天际线', '瘟疫公司', '高耸入云', '星露谷物语', '坎巴拉太空计划', '农场经营19', '冰汽时代', '猎人：荒野的召唤', '围攻(Besige)', '异星旅人(Astroneer)', '脑叶公司(Lobotomy Corporation)', '监狱建筑师(Prison Architect)', '火星求生(Surviving Mars)','戴森球计划']);
const slgS = new Push('slg', ['文明5', '文明6', '全面战争：罗马', '全面战争：罗马2', '全面战争：三国', '全面战争：幕府将军2', '全面战争：战锤2', '英雄连', '三国志9', '三国志11', '三国志12', '三国志14', '群星','无尽帝国', '为了吾王（For the king)','欧陆风云4',])
const rtsS = new Push('rts', ['英雄连', '战争之人', '破门而入(Doorkickers)', '影子战术：将军之刃', '祖先遗产(Ancestors legacy)', '终极将军：内战(Ultimate General: Civil War)'])
const mmoS = new Push('mmo', ['CS', '饥荒', '绝地求生', '星际战甲', '战舰世界', 'Kabounce', '御下饕餮(Crsed F.O.A.D)'])
const idleS = new Push('idle', ['剑与远征', '最强蜗牛', '江南百景图', '一念逍遥', '放置江湖', '', '', '', '', '', '', '']);
const rpgmS = new Push('rpgm', ['万象物语', '另一个伊甸：穿越时空的猫', '命运-冠位指定', '新笑傲江湖', '圣歌德嘉的晚钟', '影之刃3', '恋与制作人', '', '', '', '', '']);
const mangaS = new Push('manga', ['明日方舟', '战双帕弥什', '少女前线', '映月城与电子姬', '四叶草剧场', '幻书启世录', '原神', '黑潮之上', '', '', '', '']);
const musS = new Push('mus', ['Demmo', 'Phigros', 'Cytus II', '', '', '', '', '', '', '', '', '']);
const creS = new Push('cre', ['说剑', '纪念碑谷', 'Gorogoa', 'Gemini', '画境长恨歌', '末剑', '', '', '', '', '', '']);
const mtpS = new Push('mtp', ['王者荣耀', '和平精英', 'QQ飞车', '球球大作战', '决战平安京', '', '', '', '', '', '', '']);
const actmS = new Push('actm', ['艾希', '聚爆', '', '', '', '', '', '', '', '', '', '']);
const ccgS = new Push('ccg', ['阴阳师', '炉石传说', '', '', '', '', '', '', '', '', '', '']);

// Add click lister to decide when to show game names
const data = document.querySelector('.data');
const datachild = data.children;
console.log(data.children);
data.addEventListener('mouseover', showGameNames);

// ShowGameNames
function showGameNames(e) {
    for(let i = 2; i <= 14; i = i +2){
        if(e.target !== data.children[i]) {
            datachild[i+1].innerHTML = '';
        }
    }
    for(let i = 17; i <= 31; i = i +2){
        if(e.target !== data.children[i]) {
            datachild[i+1].innerHTML = '';
        }
    }
    if(e.target === data.children[2])
        rpgS.pushData();
    if(e.target === data.children[4])
        actS.pushData();
    if(e.target === data.children[6]) 
            advS.pushData();
    if(e.target === data.children[8]) 
            simS.pushData();
    if(e.target === data.children[10]) 
            slgS.pushData();
    if(e.target === data.children[12]) 
            rtsS.pushData();
    if(e.target === data.children[14]) 
            mmoS.pushData();
    if(e.target === data.children[17]) 
            idleS.pushData();
    if(e.target === data.children[19]) 
            rpgmS.pushData();
    if(e.target === data.children[21]) 
            mangaS.pushData();
    if(e.target === data.children[23]) 
            musS.pushData();
    if(e.target === data.children[25]) 
            creS.pushData();
    if(e.target === data.children[27]) 
            mtpS.pushData();
    if(e.target === data.children[29]) 
            actmS.pushData();
    if(e.target === data.children[31]) 
            ccgS.pushData();

    
}

// HideGameNames
// function hideGameNames() {
//     for( let i = 3; i < 17; i = i + 2){
//         datachild[i].innerHTML = '';
//     }
// }
