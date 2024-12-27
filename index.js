const functionList = [
    ["访问网址", "T1.0.0"],
    ["谷歌搜索", "T1.0.0"],
    ["百度搜索", "T1.0.0"],
    ["Bing搜索", "T1.0.0"],
    ["搜索记录", "T1.0.1"],
    ["书签管理", "T1.0.0"],
    ["访问书签", "T1.0.0"],
    ["Base64编码/解码", "T1.0.2"],
    ["URL编码/解码", "T1.0.2"],
    ["Unicode 中文编码/解码", "T1.0.2"],
]

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRectangles(centerX, centerY, radius, index, count) {
    const angleStep = (2 * Math.PI) / count; // 每个矩形的角度间隔
    const angle = index * angleStep; // 当前矩形的角度
    const left = centerX + (radius * 1.5) * Math.cos(angle);
    const top = centerY + (radius * 0.6) * Math.sin(angle);
    return {left: Math.round(left), top: Math.round(top)};
}

function createCard(index, item, position) {
    const card = document.createElement('div');
    card.classList.add('main-item'); // 添加卡片样式
    card.classList.add(`main-item-anim-${index}`)
    card.style.left = `${position.left - 50}px`;
    card.style.top = `${position.top}px`;
    const cardName = document.createElement('div')
    cardName.classList.add('main-item-name')
    cardName.classList.add(`main-item-color-${index}`)
    cardName.style.fontSize = `${getRandomNumber(18, 30)}px`;
    cardName.innerText = item[0]
    const cardVersion = document.createElement('div')
    cardVersion.classList.add('main-item-version')
    cardVersion.innerText = item[1]

    card.appendChild(cardName)
    card.appendChild(cardVersion);
    return card;
}

window.onload = function () {
    document.getElementById('download').addEventListener('click', function () {
        window.open('https://github.com/TuTu-Tools/tutotu/releases');
    });

    const elementLogo = document.getElementById('main-logo');
    let centerX = elementLogo.offsetLeft + elementLogo.offsetWidth / 2;
    let centerY = elementLogo.offsetTop + elementLogo.offsetHeight / 2;
    let radius = 250;
    let count = 12;
    let gapSize = 100;
    console.log(`>>>${centerX} ${centerY} ${elementLogo.offsetWidth} ${elementLogo.offsetHeight}`)

    const element = document.getElementById('main-items');

    for (let i = 0; i < functionList.length; i++) {
        let item = functionList[i];
        let nextRadius = (i / count) * gapSize + radius;
        let position = generateRectangles(centerX, centerY, nextRadius, i % count, count);
        let card = createCard(i % 10, item, position);
        element.appendChild(card)
    }
};